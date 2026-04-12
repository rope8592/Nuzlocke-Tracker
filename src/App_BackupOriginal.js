import React, { useState, useEffect } from "react";
import defaultEncounters from "./data/Encounters";
import evolutionFamilies from "./data/evolutionFamilies";
import bosses from "./data/Bosses";
import "./App.css";

const starterOptions = ["Chespin", "Fennekin", "Froakie"];
const playerOptions = ["Calem", "Serena"];

const aquacordeToStarter = {
  Chespin: "Chespin",
  Fennekin: "Fennekin",
  Froakie: "Froakie",
};

function App() {
  const [starter, setStarter] = useState(() => {
    return localStorage.getItem("nuzlocke-starter") || "";
  });
  const [player, setPlayer] = useState(() =>
    localStorage.getItem("nuzlocke-player") || "Serena"
  );

  const [encounters, setEncounters] = useState(() => {
    const saved = localStorage.getItem("nuzlocke-encounters");
    if (saved) return JSON.parse(saved);
    return defaultEncounters.map((e) => ({
      ...e,
      pokemon: e.pokemon || {},
      caughtPokemon: "",
      shinyPokemon: "",
      status: "Available",
      nickname: "",
      shinyNickname: "",
      faintNote: "",
      shinyFaintNote: "",
      shiny: false,
    }));
  });

  const aquacordeIdx = defaultEncounters.findIndex(
    (e) => e.area && e.area.toLowerCase().includes("aquacorde")
  );

  useEffect(() => {
    if (aquacordeIdx === -1) return;
    const mon = encounters[aquacordeIdx]?.caughtPokemon;
    if (aquacordeToStarter[mon]) {
      setStarter(aquacordeToStarter[mon]);
      localStorage.setItem("nuzlocke-starter", aquacordeToStarter[mon]);
    } else if (!mon) {
      setStarter("");
      localStorage.removeItem("nuzlocke-starter");
    }
  }, [encounters[aquacordeIdx]?.caughtPokemon]);

  useEffect(() => {
    localStorage.setItem("nuzlocke-player", player);
  }, [player]);

  useEffect(() => {
    localStorage.setItem("nuzlocke-encounters", JSON.stringify(encounters));
  }, [encounters]);

  const [party, setParty] = useState(() => {
    const saved = localStorage.getItem("nuzlocke-party");
    return saved ? JSON.parse(saved) : [];
  });
  const [box, setBox] = useState(() => {
    const saved = localStorage.getItem("nuzlocke-box");
    return saved ? JSON.parse(saved) : [];
  });

  const [openBoss, setOpenBoss] = useState({});
  const [defeatedBosses, setDefeatedBosses] = useState(() => {
    const saved = localStorage.getItem("nuzlocke-defeated-bosses");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("nuzlocke-party", JSON.stringify(party));
  }, [party]);
  useEffect(() => {
    localStorage.setItem("nuzlocke-box", JSON.stringify(box));
  }, [box]);
  useEffect(() => {
    localStorage.setItem("nuzlocke-defeated-bosses", JSON.stringify(defeatedBosses));
  }, [defeatedBosses]);

  const getAllAvailablePokemon = (pokemonObj) => {
    const all = [];
    function gather(obj) {
      if (Array.isArray(obj)) all.push(...obj);
      else if (typeof obj === "object" && obj !== null)
        Object.values(obj).forEach(gather);
    }
    gather(pokemonObj);
    return all;
  };

  const getAllCaughtSpecies = (ignoreIdx = -1) => {
    const caught = encounters
      .filter((e, i) => i !== ignoreIdx && e.status === "Caught" && e.caughtPokemon)
      .map((e) => e.caughtPokemon);
    const all = new Set();
    caught.forEach((mon) => {
      const key = (typeof mon === "string" ? mon : String(mon)).toLowerCase();
      const family = evolutionFamilies[key] || [key];
      family.forEach((f) => all.add(f.toLowerCase()));
    });
    return all;
  };

  const getAllCaughtShinies = () => {
    const caught = encounters.filter((e) => e.shinyPokemon).map((e) => e.shinyPokemon);
    return new Set(
      caught.map((s) => (typeof s === "string" ? s.toLowerCase() : String(s).toLowerCase()))
    );
  };

  const toggleStatus = (idx) => {
    setEncounters((prev) =>
      prev.map((entry, i) => {
        if (i !== idx) return entry;
        let newStatus;
        if (entry.status === "Available") newStatus = "Caught";
        else if (entry.status === "Caught") newStatus = "Fainted";
        else if (entry.status === "Fainted") newStatus = "Available";
        const newEntry = { ...entry, status: newStatus };
        if (newStatus === "Available") {
          newEntry.caughtPokemon = "";
          newEntry.nickname = "";
          newEntry.faintNote = "";
        }
        if ((newStatus === "Fainted" || newStatus === "Available") && entry.caughtPokemon) {
          setParty((p) => p.filter((m) => m.id !== entry.caughtPokemon));
          setBox((b) => b.filter((m) => m.id !== entry.caughtPokemon));
        }
        return newEntry;
      })
    );
  };

  const toggleShiny = (idx) => {
    setEncounters((prev) =>
      prev.map((entry, i) => (i === idx ? { ...entry, shiny: !entry.shiny } : entry))
    );
  };

  const handleCaughtChange = (idx, newMon) => {
    setEncounters((prev) =>
      prev.map((entry, i) => (i === idx ? { ...entry, caughtPokemon: newMon } : entry))
    );
    if (!newMon) return;
    setParty((p) => {
      if (p.find((m) => m.id === newMon)) return p;
      if (p.length < 6) return [...p, { id: newMon, shiny: false }];
      setBox((b) => [...b, { id: newMon, shiny: false }]);
      return p;
    });
  };

  const handleShinyCaughtChange = (idx, newMon) => {
    setEncounters((prev) =>
      prev.map((entry, i) => (i === idx ? { ...entry, shinyPokemon: newMon } : entry))
    );
    if (!newMon) return;
    setParty((p) => {
      if (p.find((m) => m.id === newMon && m.shiny)) return p;
      if (p.length < 6) return [...p, { id: newMon, shiny: true }];
      setBox((b) => [...b, { id: newMon, shiny: true }]);
      return p;
    });
  };

  const handleNicknameChange = (idx, nick, shiny = false) => {
    if (!shiny) {
      setEncounters((prev) =>
        prev.map((entry, i) => (i === idx ? { ...entry, nickname: nick } : entry))
      );
      const id = encounters[idx].caughtPokemon;
      setParty((p) => p.map((m) => (m.id === id && !m.shiny ? { ...m, nickname: nick } : m)));
      setBox((b) => b.map((m) => (m.id === id && !m.shiny ? { ...m, nickname: nick } : m)));
    } else {
      setEncounters((prev) =>
        prev.map((entry, i) => (i === idx ? { ...entry, shinyNickname: nick } : entry))
      );
      const id = encounters[idx].shinyPokemon;
      setParty((p) => p.map((m) => (m.id === id && m.shiny ? { ...m, nickname: nick } : m)));
      setBox((b) => b.map((m) => (m.id === id && m.shiny ? { ...m, nickname: nick } : m)));
    }
  };

  const handleFaintNoteChange = (idx, note, shiny = false) => {
    setEncounters((prev) =>
      prev.map((entry, i) =>
        i === idx
          ? shiny
            ? { ...entry, shinyFaintNote: note }
            : { ...entry, faintNote: note }
          : entry
      )
    );
  };

  const sendToBox = (id, shiny = false) => {
    setParty((p) => {
      const mon = p.find((m) => m.id === id && !!m.shiny === !!shiny);
      if (!mon) return p;
      setBox((b) =>
        b.some((bm) => bm.id === id && !!bm.shiny === !!shiny) ? b : [...b, mon]
      );
      return p.filter((m) => !(m.id === id && !!m.shiny === !!shiny));
    });
  };
  const sendToParty = (id, shiny = false) => {
    setBox((b) => {
      const mon = b.find((m) => m.id === id && !!m.shiny === !!shiny);
      if (!mon) return b;
      setParty((p) =>
        p.some((pm) => pm.id === id && !!pm.shiny === !!shiny) || p.length >= 6
          ? p
          : [...p, mon]
      );
      return b.filter((m) => !(m.id === id && !!m.shiny === !!shiny));
    });
  };

  const evolveMon = (id, shiny = false, container, setContainer) => {
    const key = id.toLowerCase();
    const family = evolutionFamilies[key] || [id];
    const curIdx = family.map((f) => f.toLowerCase()).indexOf(key);
    if (curIdx === -1 || curIdx === family.length - 1) return;
    const nextForm = family[curIdx + 1];
    setContainer((arr) =>
      arr.map((mon) =>
        mon.id === id && !!mon.shiny === !!shiny ? { ...mon, id: nextForm } : mon
      )
    );
    setEncounters((prev) =>
      prev.map((e) => {
        if (!shiny && e.caughtPokemon === id) return { ...e, caughtPokemon: nextForm };
        if (shiny && e.shinyPokemon === id) return { ...e, shinyPokemon: nextForm };
        return e;
      })
    );
  };

  const clearRoute = (idx) => {
    setEncounters((prev) => {
      const updated = prev.map((entry, i) =>
        i === idx
          ? {
              ...entry,
              status: "Available",
              caughtPokemon: "",
              nickname: "",
              faintNote: "",
              shiny: false,
              shinyPokemon: "",
              shinyNickname: "",
              shinyFaintNote: "",
            }
          : entry
      );
      const gone = [prev[idx].caughtPokemon, prev[idx].shinyPokemon].filter(Boolean);
      setParty((p) => p.filter((m) => !gone.some((g, i) => m.id === g && !!m.shiny === !!(i === 1))));
      setBox((b) => b.filter((m) => !gone.some((g, i) => m.id === g && !!m.shiny === !!(i === 1))));
      return updated;
    });
  };

  const clearAllPartyBox = () => {
    setParty([]);
    setBox([]);
  };

  const routeAreas = defaultEncounters.map((e) => e.area);

  function getTimelineWithBosses() {
    const timeline = [];
    let bossIdx = 0;
    for (let i = 0; i < routeAreas.length; i++) {
      const area = routeAreas[i];
      while (bossIdx < bosses.length && bosses[bossIdx].storyBefore === area) {
        timeline.push({ type: "boss", boss: bosses[bossIdx] });
        bossIdx++;
      }
      timeline.push({ type: "route", idx: i });
      while (bossIdx < bosses.length && bosses[bossIdx].storyAfter === area) {
        timeline.push({ type: "boss", boss: bosses[bossIdx] });
        bossIdx++;
      }
    }
    while (bossIdx < bosses.length) {
      timeline.push({ type: "boss", boss: bosses[bossIdx] });
      bossIdx++;
    }
    return timeline;
  }
  const timeline = getTimelineWithBosses();

  function renderEncounterMethods(entry) {
    const methodElements = [];
    function traverse(obj, prefix = "") {
      if (Array.isArray(obj)) {
        methodElements.push(
          <p key={prefix}>
            <strong>{prefix}:</strong> {obj.join(", ")}
          </p>
        );
      } else if (typeof obj === "object" && obj !== null) {
        Object.entries(obj).forEach(([key, val]) => {
          traverse(val, prefix ? `${prefix} ${key}` : key);
        });
      }
    }
    traverse(entry.pokemon);
    return methodElements;
  }

  const graveIcon = "💀";
  const shinyIcon = "🌟";
  const graveStyle = {
    border: "1px solid #900",
    backgroundColor: "#fdd",
    padding: 8,
    borderRadius: 5,
    marginBottom: 6,
    minWidth: 150,
  };

  function getConditionalTeam(bossObj) {
    if (!bossObj.conditionalTeams) return null;
    if (!starter || !player) return null;
    let key = `${starter}_${player}`;
    if (!bossObj.conditionalTeams[key]) {
      key =
        Object.keys(bossObj.conditionalTeams).find(
          (k) =>
            k.toLowerCase().includes(starter.toLowerCase()) &&
            k.toLowerCase().includes(player.toLowerCase())
        ) || "";
    }
    return bossObj.conditionalTeams[key] || null;
  }

  function toggleBossDefeated(bossId) {
    setDefeatedBosses((prev) => ({
      ...prev,
      [bossId]: !prev[bossId],
    }));
  }

  const graveyard = encounters.flatMap((e, idx) => {
    const graveList = [];
    if (e.status === "Fainted" && e.caughtPokemon) {
      graveList.push({
        id: e.caughtPokemon,
        area: e.area,
        nickname: e.nickname,
        note: e.faintNote || "",
        shiny: false,
        revive: () => {
          setEncounters((prev) =>
            prev.map((entry, i) =>
              entry.caughtPokemon === e.caughtPokemon && entry.status === "Fainted"
                ? { ...entry, status: "Available", caughtPokemon: "", nickname: "", faintNote: "" }
                : entry
            )
          );
        },
        idx,
      });
    }
    if (e.shiny && e.shinyPokemon) {
      graveList.push({
        id: e.shinyPokemon,
        area: e.area,
        nickname: e.shinyNickname,
        note: e.shinyFaintNote || "",
        shiny: true,
        revive: () => {
          setEncounters((prev) =>
            prev.map((entry, i) =>
              entry.shinyPokemon === e.shinyPokemon && entry.shiny
                ? { ...entry, shiny: false, shinyPokemon: "", shinyNickname: "", shinyFaintNote: "" }
                : entry
            )
          );
        },
        idx,
      });
    }
    return graveList;
  });

  const groupedGraveyard = graveyard.reduce((acc, mon) => {
    if (!acc[mon.area]) acc[mon.area] = [];
    acc[mon.area].push(mon);
    return acc;
  }, {});

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Nuzlocke Tracker</h1>
      <div style={{ marginBottom: 20, padding: 10, background: "#eef" }}>
        <label>
          <strong>Your Starter: </strong>
          <select value={starter} disabled style={{ marginRight: 20, minWidth: 110 }}>
            <option value="">Choose...</option>
            {starterOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span style={{ color: "#666", fontSize: 13 }}>
            &nbsp;(Set automatically by Aquacorde Town catch)
          </span>
        </label>
        <label>
          <strong>Player: </strong>
          <select
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            style={{ minWidth: 100 }}
          >
            {playerOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ marginBottom: 20 }}>
        {timeline.map((step, idx) => {
          if (step.type === "route") {
            const entry = encounters[step.idx];
            if (!entry || !entry.pokemon) {
              return (
                <div
                  key={entry?.area || idx}
                  style={{
                    border: "1px solid #f00",
                    borderRadius: 7,
                    margin: "18px 0",
                    padding: "12px 12px 8px 12px",
                    background: "#fee",
                    color: "#900",
                  }}
                >
                  <strong>Error:</strong> This encounter is missing Pokémon data.
                </div>
              );
            }
            const caughtSpecies = getAllCaughtSpecies(step.idx);
            const possibleMons = getAllAvailablePokemon(entry.pokemon);
            const dupeMons = possibleMons.filter((m) =>
              caughtSpecies.has(m.toLowerCase())
            );
            const shinyMons = possibleMons.filter((m) => !dupeMons.includes(m));
            return (
              <div
                key={entry.area + idx}
                style={{
                  border: "1px solid #bbb",
                  borderRadius: 7,
                  margin: "18px 0",
                  padding: "12px 12px 8px 12px",
                  background: "#fafcff",
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  {entry.area}{" "}
                  <span style={{ fontSize: 13, color: "#999" }}>
                    (Level Cap: {entry.levelCap || "?"})
                  </span>
                </h3>
                {renderEncounterMethods(entry)}
                <div>
                  <label>
                    <strong>Caught Pokémon:</strong>
                    <select
                      value={entry.caughtPokemon}
                      onChange={(e) =>
                        handleCaughtChange(step.idx, e.target.value)
                      }
                      disabled={
                        entry.status !== "Available" ||
                        entry.shiny ||
                        dupeMons.includes(entry.caughtPokemon)
                      }
                    >
                      <option value="">--</option>
                      {possibleMons
                        .filter(
                          (m) =>
                            !caughtSpecies.has(m.toLowerCase()) ||
                            entry.caughtPokemon === m
                        )
                        .map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                    </select>
                  </label>
                  &nbsp; | &nbsp;
                  <label>
                    <strong>Shiny:</strong>
                    <input
                      type="checkbox"
                      checked={entry.shiny}
                      onChange={() => toggleShiny(step.idx)}
                      disabled={entry.status !== "Available"}
                    />
                  </label>
                  {entry.shiny && (
                    <>
                      &nbsp;|&nbsp;
                      <label>
                        <strong>Shiny Pokémon:</strong>
                        <select
                          value={entry.shinyPokemon}
                          onChange={(e) =>
                            handleShinyCaughtChange(step.idx, e.target.value)
                          }
                        >
                          <option value="">--</option>
                          {shinyMons.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </label>
                    </>
                  )}
                </div>
                <div style={{ margin: "4px 0 8px 0" }}>
                  <label>
                    <strong>Status: </strong>
                    <span
                      style={{
                        color:
                          entry.status === "Available"
                            ? "#070"
                            : entry.status === "Caught"
                            ? "#17b"
                            : "#b00",
                        fontWeight: "bold",
                        marginRight: 8,
                      }}
                    >
                      {entry.status}
                    </span>
                    <button
                      style={{ marginRight: 8 }}
                      onClick={() => toggleStatus(step.idx)}
                    >
                      Cycle Status
                    </button>
                    <button onClick={() => clearRoute(step.idx)}>
                      Clear Route
                    </button>
                  </label>
                </div>
                <div style={{ margin: "4px 0 8px 0" }}>
                  <label>
                    <strong>Nickname:</strong>
                    <input
                      style={{ marginRight: 6, width: 120 }}
                      value={entry.nickname}
                      disabled={!entry.caughtPokemon}
                      onChange={(e) =>
                        handleNicknameChange(step.idx, e.target.value, false)
                      }
                    />
                    {entry.shiny && (
                      <>
                        <span style={{ marginLeft: 8 }}>
                          <strong>Shiny Nickname:</strong>
                          <input
                            style={{ width: 120 }}
                            value={entry.shinyNickname}
                            disabled={!entry.shinyPokemon}
                            onChange={(e) =>
                              handleNicknameChange(
                                step.idx,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </span>
                      </>
                    )}
                  </label>
                </div>
                <div style={{ margin: "4px 0 8px 0" }}>
                  <label>
                    <strong>Faint Note:</strong>
                    <input
                      style={{ marginRight: 6, width: 180 }}
                      value={entry.faintNote}
                      disabled={entry.status !== "Fainted"}
                      onChange={(e) =>
                        handleFaintNoteChange(step.idx, e.target.value, false)
                      }
                    />
                    {entry.shiny && (
                      <>
                        <span style={{ marginLeft: 8 }}>
                          <strong>Shiny Faint Note:</strong>
                          <input
                            style={{ width: 180 }}
                            value={entry.shinyFaintNote}
                            disabled={!entry.shiny}
                            onChange={(e) =>
                              handleFaintNoteChange(
                                step.idx,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            );
          } else if (step.type === "boss") {
            const boss = step.boss;
            const conditionalTeam = getConditionalTeam(boss);
            const isOpen = openBoss[boss.id];
            const isDefeated = !!defeatedBosses[boss.id];

            return (
              <div
                key={boss.id}
                style={{
                  background: isDefeated ? "#d4ffd4" : "#ffe",
                  border: isDefeated ? "2px solid #080" : "1px solid #cc3",
                  borderRadius: 8,
                  margin: "20px 0",
                  padding: 14,
                  boxShadow: "1px 2px 6px #ddc",
                  opacity: isDefeated ? 0.6 : 1,
                  position: "relative"
                }}
              >
                <div
                  onClick={() =>
                    setOpenBoss((o) => ({ ...o, [boss.id]: !isOpen }))
                  }
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                >
                  {boss.name}{" "}
                  <span style={{ color: "#888", fontSize: 14 }}>
                    ({boss.location || "?"}) | Level Cap: {boss.levelCap || "?"}
                  </span>
                  <span style={{ float: "right", fontWeight: 400 }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                  <button
                    style={{
                      float: "right",
                      marginRight: 10,
                      background: isDefeated ? "#7ee37e" : "#ffe",
                      border: "1px solid #090",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      toggleBossDefeated(boss.id);
                    }}
                  >
                    {isDefeated ? "Defeated ✔" : "Mark Defeated"}
                  </button>
                </div>
                {isOpen && (
                  <div>
                    {boss.team && (
                      <>
                        <div style={{ margin: "10px 0 2px 0" }}>
                          <b>Full Team:</b>
                        </div>
                        <ul style={{ marginTop: 2 }}>
                          {boss.team.map((mon, i) => (
                            <li key={i}>
                              {mon.species} (Lv. {mon.level}
                              {mon.item ? `, @${mon.item}` : ""}
                              {mon.ability ? `, Ability: ${mon.ability}` : ""}
                              {mon.ivs ? `, IVs: ${mon.ivs}` : ""}
                              {mon.moves ? `, Moves: ${mon.moves.join(" / ")}` : ""}
                              )
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {conditionalTeam && (
                      <>
                        <div style={{ margin: "10px 0 2px 0" }}>
                          <b>Conditional Team:</b>
                          <span style={{ fontSize: 13, color: "#888" }}>
                            {" "}
                            (varies by starter and/or player)
                          </span>
                        </div>
                        <ul style={{ marginTop: 2 }}>
                          {conditionalTeam.map((mon, i) => (
                            <li key={i}>
                              {mon.species} (Lv. {mon.level}
                              {mon.item ? `, @${mon.item}` : ""}
                              {mon.ability ? `, Ability: ${mon.ability}` : ""}
                              {mon.ivs ? `, IVs: ${mon.ivs}` : ""}
                              {mon.moves ? `, Moves: ${mon.moves.join(" / ")}` : ""}
                              )
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <div style={{ flex: 1, marginRight: 24 }}>
          <h2>
            Party ({party.length}/6){" "}
            <button onClick={clearAllPartyBox} style={{ marginLeft: 12 }}>
              Clear All
            </button>
          </h2>
          <ul>
            {party.map((mon, i) => (
              <li key={mon.id + mon.shiny + i} style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: "bold" }}>
                  {mon.shiny ? shinyIcon : ""}
                  {mon.nickname || mon.id}
                </span>{" "}
                <button
                  onClick={() => evolveMon(mon.id, mon.shiny, party, setParty)}
                  style={{ marginLeft: 6 }}
                >
                  Evolve
                </button>
                <button
                  onClick={() => sendToBox(mon.id, mon.shiny)}
                  style={{ marginLeft: 6 }}
                >
                  Box
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, marginRight: 24 }}>
          <h2>Box</h2>
          <ul>
            {box.map((mon, i) => (
              <li key={mon.id + mon.shiny + i} style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: "bold" }}>
                  {mon.shiny ? shinyIcon : ""}
                  {mon.nickname || mon.id}
                </span>{" "}
                <button
                  onClick={() => evolveMon(mon.id, mon.shiny, box, setBox)}
                  style={{ marginLeft: 6 }}
                >
                  Evolve
                </button>
                <button
                  onClick={() => sendToParty(mon.id, mon.shiny)}
                  style={{ marginLeft: 6 }}
                  disabled={party.length >= 6}
                >
                  Party
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>
            Graveyard{" "}
            <span style={{ fontSize: 13, color: "#b00", marginLeft: 8 }}>
              (fainted Pokémon)
            </span>
          </h2>
          {Object.entries(groupedGraveyard).map(([area, mons]) => (
            <div key={area} style={graveStyle}>
              <b>{area}</b>
              <ul>
                {mons.map((mon, i) => (
                  <li key={mon.id + mon.shiny + i}>
                    {mon.shiny ? shinyIcon : graveIcon}{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {mon.nickname || mon.id}
                    </span>
                    {mon.note && (
                      <span style={{ fontStyle: "italic", color: "#a33" }}>
                        {" "}
                        - {mon.note}
                      </span>
                    )}
                    <button
                      style={{ marginLeft: 8 }}
                      onClick={mon.revive}
                      title="Revive (restore to available)"
                    >
                      Revive
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ marginTop: 30, fontSize: 14, color: "#888" }}>
        Nuzlocke Tracker &copy; 2025 | Custom for Wilting Y | Developed by Chris Roper & GPT
      </footer>
    </div>
  );
}

export default App;

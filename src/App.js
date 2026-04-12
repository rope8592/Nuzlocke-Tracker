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


function mergePokemonData(defaultPokemon, savedPokemon) {
  if (Array.isArray(defaultPokemon)) {
    return Array.isArray(savedPokemon) ? savedPokemon : defaultPokemon;
  }

  if (
    typeof defaultPokemon === "object" &&
    defaultPokemon !== null &&
    !Array.isArray(defaultPokemon)
  ) {
    const merged = {};
    const savedObj =
      typeof savedPokemon === "object" &&
      savedPokemon !== null &&
      !Array.isArray(savedPokemon)
        ? savedPokemon
        : {};

    Object.keys(defaultPokemon).forEach((key) => {
      merged[key] = mergePokemonData(defaultPokemon[key], savedObj[key]);
    });

    return merged;
  }

  return defaultPokemon;
}

function buildDefaultEncounterEntry(entry) {
  return {
    ...entry,
    pokemon: entry.pokemon || {},
    caughtPokemon: "",
    shinyPokemon: "",
    status: "Available",
    nickname: "",
    shinyNickname: "",
    faintNote: "",
    shinyFaintNote: "",
    shiny: false,
  };
}

function normalizeSavedEncounters(savedEncounters, defaults) {
  if (!Array.isArray(savedEncounters)) {
    return defaults.map(buildDefaultEncounterEntry);
  }

  const savedByArea = new Map(savedEncounters.map((entry) => [entry.area, entry]));

  return defaults.map((defaultEntry) => {
    const baseEntry = buildDefaultEncounterEntry(defaultEntry);
    const savedEntry = savedByArea.get(defaultEntry.area);

    if (!savedEntry) {
      return baseEntry;
    }

    return {
      ...baseEntry,
      ...savedEntry,
      pokemon: mergePokemonData(baseEntry.pokemon || {}, savedEntry.pokemon || {}),
      caughtPokemon: savedEntry.caughtPokemon || "",
      shinyPokemon: savedEntry.shinyPokemon || "",
      status: savedEntry.status || "Available",
      nickname: savedEntry.nickname || "",
      shinyNickname: savedEntry.shinyNickname || "",
      faintNote: savedEntry.faintNote || "",
      shinyFaintNote: savedEntry.shinyFaintNote || "",
      shiny: !!savedEntry.shiny,
    };
  });
}

function resetEncounterEntry(entry) {
  return {
    ...entry,
    pokemon: entry.pokemon || {},
    caughtPokemon: "",
    shinyPokemon: "",
    status: "Available",
    nickname: "",
    shinyNickname: "",
    faintNote: "",
    shinyFaintNote: "",
    shiny: false,
  };
}

function formatMethodLabel(label) {
  return String(label)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/old rod/gi, "Old Rod")
    .replace(/good rod/gi, "Good Rod")
    .replace(/super rod/gi, "Super Rod")
    .replace(/rock smash/gi, "Rock Smash")
    .replace(/rustling bush/gi, "Rustling Bush")
    .replace(/trash daily/gi, "Trash (Daily)")
    .replace(/trash tuesday/gi, "Trash (Tuesday)")
    .replace(/trash thursday/gi, "Trash (Thursday)")
    .replace(/yellow flowers/gi, "Yellow Flowers")
    .replace(/purple flowers/gi, "Purple Flowers")
    .replace(/red flowers/gi, "Red Flowers")
    .replace(/tall grass/gi, "Tall Grass")
    .replace(/shallow water/gi, "Shallow Water")
    .replace(/dirt mound/gi, "Dirt Mound")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSpriteSlug(name) {
  return String(name)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/♀/g, "-f")
    .replace(/♂/g, "-m")
    .replace(/['’.:]/g, "")
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/--+/g, "-")
    .toLowerCase();
}

function getSpriteUrl(name) {
  const slug = normalizeSpriteSlug(name);
  return `https://img.pokemondb.net/sprites/scarlet-violet/icon/${slug}.png`;
}

function App() {
  const [starter, setStarter] = useState(() => {
    return localStorage.getItem("nuzlocke-starter") || "";
  });
  const [player, setPlayer] = useState(() =>
    localStorage.getItem("nuzlocke-player") || "Serena"
  );
  const [activeTab, setActiveTab] = useState("game");
  const [boxSearch, setBoxSearch] = useState("");
  const [boxSort, setBoxSort] = useState("route");
  const [graveSearch, setGraveSearch] = useState("");
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [selectedBoxMon, setSelectedBoxMon] = useState(null);

  const exportRunData = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      starter,
      player,
      encounters,
      party,
      box,
      defeatedBosses,
      activeTab,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `wilting-y-run-backup-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  const [encounters, setEncounters] = useState(() => {
    const saved = localStorage.getItem("nuzlocke-encounters");
    if (saved) {
      try {
        return normalizeSavedEncounters(JSON.parse(saved), defaultEncounters);
      } catch (error) {
        console.error("Failed to parse saved encounters, using defaults instead.", error);
      }
    }
    return defaultEncounters.map(buildDefaultEncounterEntry);
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


  const markPartyPokemonFainted = (id, shiny = false) => {
    const monLabel = `${id}${shiny ? " (Shiny)" : ""}`;
    const confirmed = window.confirm(`Mark ${monLabel} as fainted?`);
    if (!confirmed) return;

    const noteInput = window.prompt("Cause of death? (optional)", "");
    if (noteInput === null) return;
    const deathNote = noteInput.trim();

    setEncounters((prev) =>
      prev.map((entry) => {
        if (!shiny && entry.caughtPokemon === id) {
          return {
            ...entry,
            status: "Fainted",
            faintNote: deathNote || entry.faintNote || "Fainted from party bar",
          };
        }
        if (shiny && entry.shinyPokemon === id) {
          return {
            ...entry,
            shiny: true,
            shinyFaintNote: deathNote || entry.shinyFaintNote || "Fainted from party bar",
          };
        }
        return entry;
      })
    );

    setParty((p) => p.filter((m) => !(m.id === id && !!m.shiny === !!shiny)));
    setBox((b) => b.filter((m) => !(m.id === id && !!m.shiny === !!shiny)));
  };


  const resetAllEncounters = () => {
    const confirmed = window.confirm("Start a new run? This will clear encounters, party, box, graveyard data, defeated bosses, and starter selection.");
    if (!confirmed) return;

    const resetData = defaultEncounters.map(resetEncounterEntry);
    setEncounters(resetData);
    setParty([]);
    setBox([]);
    setDefeatedBosses({});
    setStarter("");

    localStorage.removeItem("nuzlocke-encounters");
    localStorage.removeItem("nuzlocke-party");
    localStorage.removeItem("nuzlocke-box");
    localStorage.removeItem("nuzlocke-defeated-bosses");
    localStorage.removeItem("nuzlocke-starter");
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


function renderEncounterMethods(entry, caughtSpecies) {
  const methodElements = [];

  function getOddsColor(count) {
    if (count <= 0) return "#cbd5e1";
    if (count === 1) return "#0a7";
    if (count <= 3) return "#2b7";
    if (count <= 6) return "#a76b00";
    return "#b33";
  }

  function renderMethodCard(label, mons, keyBase) {
    const visibleMons = mons.filter((m) => m !== "No encounters");
    const eligibleMons = visibleMons.filter(
      (m) => !caughtSpecies.has(String(m).toLowerCase())
    );
    const oddsColor = getOddsColor(eligibleMons.length);
    const isGuaranteed = eligibleMons.length === 1;

    return (
      <div
        key={keyBase}
        style={{
          border: isGuaranteed ? "1px solid #1d4ed8" : "1px solid #d7dbe2",
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          background: isGuaranteed ? "#0f2a44" : "#1f2937",
          transition: "0.2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 8,
          }}
        >
          <div>
            <strong>{label}</strong>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 12,
                padding: "3px 8px",
                borderRadius: 999,
                background: "#374151",
                color: "#e5e7eb",
              }}
            >
              Total: {visibleMons.length}
            </span>
            <span
              style={{
                fontSize: 12,
                padding: "3px 8px",
                borderRadius: 999,
                background: "#374151",
                color: oddsColor,
                fontWeight: "bold",
              }}
            >
              Eligible: {eligibleMons.length}
            </span>
            {isGuaranteed && (
              <span
                style={{
                  fontSize: 12,
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "#1e3a8a",
                  color: "#93c5fd",
                  fontWeight: "bold",
                }}
              >
                ⭐ Guaranteed after Dupes
              </span>
            )}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          {mons.map((m, idx) => {
            const eligible = m !== "No encounters" && !caughtSpecies.has(String(m).toLowerCase());
            return (
              <span
                key={`${keyBase}-mon-${idx}`}
                style={{
                  fontSize: 13,
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: eligible ? "#374151" : "#111827",
                  color: eligible ? "#e5e7eb" : "#6b7280",
                  textDecoration: eligible ? "none" : "line-through",
                }}
              >
                {m}
              </span>
            );
          })}
        </div>

        <div style={{ fontSize: 13, color: "#d1d5db" }}>
          <strong>{label} odds:</strong>{" "}
          {eligibleMons.length > 0
            ? eligibleMons
                .map((m) => `${m} (${(100 / eligibleMons.length).toFixed(1)}%)`)
                .join(", ")
            : "All dupes / no eligible encounters"}
        </div>
      </div>
    );
  }

  function getNestedLevel(levelObj, pathParts) {
    let current = levelObj;
    for (const part of pathParts) {
      if (!current || typeof current !== "object") return "";
      current = current[part];
    }
    return typeof current === "string" ? current : "";
  }

  function traverse(obj, prefix = "", pathParts = []) {
    if (Array.isArray(obj)) {
      const cleanLabel = formatMethodLabel(prefix || "Encounters");
      const levelText = getNestedLevel(entry.methodLevels || {}, pathParts);
      const displayLabel = levelText ? `${cleanLabel} (${levelText})` : cleanLabel;
      methodElements.push(
        renderMethodCard(displayLabel, obj, `${entry.area}-${prefix || "encounters"}`)
      );
    } else if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, val]) => {
        traverse(val, prefix ? `${prefix} ${key}` : key, [...pathParts, key]);
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
    backgroundColor: "#3a1f1f",
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



  const livingCaught = encounters.flatMap((e) => {
    const mons = [];
    if (e.status === "Caught" && e.caughtPokemon) {
      const inParty = party.some((m) => m.id === e.caughtPokemon && !m.shiny);
      const inBox = box.some((m) => m.id === e.caughtPokemon && !m.shiny);
      mons.push({
        id: e.caughtPokemon,
        area: e.area,
        nickname: e.nickname,
        shiny: false,
        location: inParty ? "Party" : inBox ? "Box" : "Caught",
      });
    }
    if (e.shiny && e.shinyPokemon) {
      const inParty = party.some((m) => m.id === e.shinyPokemon && m.shiny);
      const inBox = box.some((m) => m.id === e.shinyPokemon && m.shiny);
      mons.push({
        id: e.shinyPokemon,
        area: e.area,
        nickname: e.shinyNickname,
        shiny: true,
        location: inParty ? "Party" : inBox ? "Box" : "Caught",
      });
    }
    return mons;
  });

  const groupedLivingCaught = livingCaught.reduce((acc, mon) => {
    if (!acc[mon.area]) acc[mon.area] = [];
    acc[mon.area].push(mon);
    return acc;
  }, {});
const filteredLivingCaught = livingCaught
  .filter((mon) => {
    const q = boxSearch.trim().toLowerCase();
    if (!q) return true;
    return [mon.id, mon.nickname || "", mon.area, mon.location]
      .join(" ")
      .toLowerCase()
      .includes(q);
  })
  .sort((a, b) => {
    if (boxSort === "name") {
      return String(a.nickname || a.id).localeCompare(String(b.nickname || b.id));
    }
    if (boxSort === "location") {
      return String(a.location).localeCompare(String(b.location)) || String(a.area).localeCompare(String(b.area));
    }
    return String(a.area).localeCompare(String(b.area)) || String(a.nickname || a.id).localeCompare(String(b.nickname || b.id));
  });

const groupedBoxByLocation = filteredLivingCaught.reduce((acc, mon) => {
  if (!acc[mon.location]) acc[mon.location] = [];
  acc[mon.location].push(mon);
  return acc;
}, {});

const boxedMonsOnly = filteredLivingCaught.filter((mon) => mon.location === "Box");

const confirmAddSelectedToTeam = () => {
  if (!selectedBoxMon) return;
  if (party.length >= 6) {
    window.alert("Your party is already full.");
    return;
  }
  sendToParty(selectedBoxMon.id, selectedBoxMon.shiny);
  setSelectedBoxMon(null);
  setShowAddTeamModal(false);
};

const openAddTeamModal = () => {
  setSelectedBoxMon(null);
  setShowAddTeamModal(true);
};

const closeAddTeamModal = () => {
  setSelectedBoxMon(null);
  setShowAddTeamModal(false);
};

const filteredGraveyard = graveyard.filter((mon) => {
  const q = graveSearch.trim().toLowerCase();
  if (!q) return true;
  return [mon.id, mon.nickname || "", mon.area, mon.note || ""]
    .join(" ")
    .toLowerCase()
    .includes(q);
});

const groupedFilteredGraveyard = filteredGraveyard.reduce((acc, mon) => {
  if (!acc[mon.area]) acc[mon.area] = [];
  acc[mon.area].push(mon);
  return acc;
}, {});


  return (
    <div className="App" style={{ padding: 20, paddingBottom: 120 }}>
      <h1>Nuzlocke Tracker</h1>

      <div style={{ marginBottom: 20, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <button
          onClick={() => setActiveTab("game")}
          style={{ fontWeight: activeTab === "game" ? "bold" : "normal" }}
        >
          Game
        </button>
        <button
          onClick={() => setActiveTab("box")}
          style={{ fontWeight: activeTab === "box" ? "bold" : "normal" }}
        >
          Box
        </button>
        <button
          onClick={() => setActiveTab("grave")}
          style={{ fontWeight: activeTab === "grave" ? "bold" : "normal" }}
        >
          Graveyard
        </button>
        <button
          onClick={exportRunData}
          style={{ marginLeft: "auto" }}
        >
          Export Run
        </button>
      </div>

      {activeTab === "game" && (
        <>
          <div style={{ marginBottom: 16 }}>
            <button onClick={resetAllEncounters}>Reset Encounters</button>
          </div>
          <div style={{ marginBottom: 20, padding: 10, background: "#1f2937" }}>
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
              <span style={{ color: "#d1d5db", fontSize: 13 }}>
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
                        background: "#3a1f1f",
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
                      background: "#1f2937",
                    }}
                  >
                    <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span>{entry.area}</span>
                      <span
                        style={{
                          fontSize: 12,
                          padding: "3px 8px",
                          borderRadius: 999,
                          background:
                            entry.status === "Caught"
                              ? "#163322"
                              : entry.status === "Fainted"
                              ? "#3a1f1f"
                              : "#374151",
                          color:
                            entry.status === "Caught"
                              ? "#166534"
                              : entry.status === "Fainted"
                              ? "#fca5a5"
                              : "#e5e7eb",
                          fontWeight: "bold",
                        }}
                      >
                        {entry.status === "Caught"
                          ? "✅ Complete"
                          : entry.status === "Fainted"
                          ? "💀 Failed"
                          : "❌ Open"}
                      </span>
                      <span style={{ fontSize: 13, color: "#cbd5e1" }}>
                        (Level Cap: {entry.levelCap || "?"})
                      </span>
                    </h3>
                    <div
                      style={{
                        marginTop: -6,
                        marginBottom: 12,
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: "#374151",
                color: "#e5e7eb",
                        }}
                      >
                        Total encounters: {possibleMons.filter((m) => m !== "No encounters").length}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: "#374151",
                          color: "#e5e7eb",
                          fontWeight: "bold",
                        }}
                      >
                        Eligible after Dupes: {possibleMons.filter((m) => m !== "No encounters" && !caughtSpecies.has(m.toLowerCase())).length}
                      </span>
                    </div>
                    {renderEncounterMethods(entry, caughtSpecies)}
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
                      background: isDefeated ? "#d4ffd4" : "#2a2416",
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
                      <span style={{ color: "#cbd5e1", fontSize: 14 }}>
                        ({boss.location || "?"}) | Level Cap: {boss.levelCap || "?"}
                      </span>
                      <span style={{ float: "right", fontWeight: 400 }}>
                        {isOpen ? "▲" : "▼"}
                      </span>
                      <button
                        style={{
                          float: "right",
                          marginRight: 10,
                          background: isDefeated ? "#7ee37e" : "#2a2416",
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
                              <span style={{ fontSize: 13, color: "#cbd5e1" }}>
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
        </>
      )}

      
{activeTab === "box" && (
  <div style={{ marginBottom: 20 }}>
    <h2>All Living Caught Pokémon</h2>
    <p style={{ color: "#d1d5db", marginTop: -4 }}>
      Includes party members and boxed Pokémon.
    </p>
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Search caught Pokémon"
        value={boxSearch}
        onChange={(e) => setBoxSearch(e.target.value)}
        style={{ minWidth: 240, padding: 8 }}
      />
      <select value={boxSort} onChange={(e) => setBoxSort(e.target.value)} style={{ padding: 8 }}>
        <option value="route">Sort by Route</option>
        <option value="name">Sort by Name</option>
        <option value="location">Sort by Location</option>
      </select>
    </div>
    {Object.keys(groupedBoxByLocation).length === 0 ? (
      <p>No caught Pokémon match your search.</p>
    ) : (
      Object.entries(groupedBoxByLocation).map(([location, mons]) => (
        <div key={location} style={{ border: "1px solid #bbb", borderRadius: 10, margin: "18px 0", padding: 12, background: "#1f2937" }}>
          <h3 style={{ marginTop: 0 }}>{location}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {mons.map((mon, i) => (
              <div key={mon.id + mon.shiny + i} style={{ border: "1px solid #ddd", borderRadius: 10, padding: 10, background: "#1f2937", display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img
                    src={getSpriteUrl(mon.id)}
                    alt={mon.id}
                    style={{ width: 48, height: 48, imageRendering: "pixelated" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div>
                    <div style={{ fontWeight: "bold" }}>
                      {mon.shiny ? shinyIcon : ""}{mon.nickname || mon.id}
                    </div>
                    {mon.nickname && <div style={{ fontSize: 13, color: "#d1d5db" }}>{mon.id}</div>}
                    <div style={{ fontSize: 13, color: "#d1d5db" }}>{mon.area}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {mon.location === "Box" && (
                    <button
                      onClick={() => sendToParty(mon.id, mon.shiny)}
                      disabled={party.length >= 6}
                    >
                      To Party
                    </button>
                  )}
                  {mon.location === "Party" && (
                    <button onClick={() => sendToBox(mon.id, mon.shiny)}>
                      To Box
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
    )}
  </div>
)}


{activeTab === "grave" && (
  <div style={{ marginBottom: 20 }}>
    <h2>
      Graveyard <span style={{ fontSize: 13, color: "#b00", marginLeft: 8 }}>(all deaths)</span>
    </h2>
    <p style={{ color: "#d1d5db", marginTop: -4 }}>
      Total deaths: <strong>{graveyard.length}</strong>
    </p>
    <div style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Search graveyard"
        value={graveSearch}
        onChange={(e) => setGraveSearch(e.target.value)}
        style={{ minWidth: 240, padding: 8 }}
      />
    </div>
    {Object.keys(groupedFilteredGraveyard).length === 0 ? (
      <p>No deaths match your search.</p>
    ) : (
      Object.entries(groupedFilteredGraveyard).map(([area, mons]) => (
        <div key={area} style={graveStyle}>
          <b>{area}</b>
          <ul>
            {mons.map((mon, i) => (
              <li key={mon.id + mon.shiny + i} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src={getSpriteUrl(mon.id)}
                  alt={mon.id}
                  style={{ width: 32, height: 32, imageRendering: "pixelated" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div>
                  <div>
                    {mon.shiny ? shinyIcon : graveIcon}{" "}
                    <span style={{ fontWeight: "bold" }}>{mon.nickname || mon.id}</span>
                    {mon.shiny && <span style={{ marginLeft: 6, color: "#b26b00" }}>Shiny</span>}
                  </div>
                  {mon.note && (
                    <div style={{ fontStyle: "italic", color: "#a33", fontSize: 13 }}>
                      {mon.note}
                    </div>
                  )}
                </div>
                <button
                  style={{ marginLeft: "auto" }}
                  onClick={mon.revive}
                  title="Revive (restore to available)"
                >
                  Revive
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))
    )}
  </div>
)}

<div
  style={{
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(180deg, #1f1f1f 0%, #141414 100%)",
    color: "#1f2937",
    padding: "12px 14px",
    display: "flex",
    justifyContent: "center",
    gap: 12,
    borderTop: "1px solid #3d3d3d",
    boxShadow: "0 -6px 18px rgba(0,0,0,0.35)",
    overflowX: "auto",
    zIndex: 1000,
  }}
>
  {party.length === 0 ? (
    <div
      style={{
        opacity: 0.75,
        padding: "10px 14px",
        background: "#2a2a2a",
        borderRadius: 12,
        minWidth: 180,
        textAlign: "center",
      }}
    >
      No party Pokémon
    </div>
  ) : (
    <>
      {party.map((mon, i) => (
        <div
          key={mon.id + mon.shiny + i}
          style={{
            minWidth: 132,
            textAlign: "center",
            background: "#262626",
            border: "1px solid #3a3a3a",
            borderRadius: 14,
            padding: "10px 10px 12px",
            fontSize: 13,
            boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 6,
            }}
          >
            <img
              src={getSpriteUrl(mon.id)}
              alt={mon.id}
              style={{
                width: 52,
                height: 52,
                imageRendering: "pixelated",
                display: "block",
                filter: mon.shiny ? "drop-shadow(0 0 6px rgba(255,215,0,0.5))" : "none",
              }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: 13,
              lineHeight: 1.2,
              minHeight: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {mon.shiny ? shinyIcon : ""}
            <span>{mon.nickname || mon.id}</span>
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#bdbdbd",
              marginTop: 2,
              minHeight: 14,
            }}
          >
            {mon.nickname ? mon.id : "Party"}
          </div>
          <div style={{ marginTop: 8, display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
            <button
              onClick={() => sendToBox(mon.id, mon.shiny)}
              style={{
                fontSize: 11,
                padding: "4px 8px",
                borderRadius: 8,
              }}
            >
              Box
            </button>
            <button
              onClick={() => markPartyPokemonFainted(mon.id, mon.shiny)}
              style={{
                fontSize: 11,
                padding: "4px 8px",
                borderRadius: 8,
                background: "#7f1d1d",
                color: "#1f2937",
                border: "1px solid #991b1b",
              }}
            >
              Faint
            </button>
            <button
              onClick={() => evolveMon(mon.id, mon.shiny, party, setParty)}
              style={{
                fontSize: 11,
                padding: "4px 8px",
                borderRadius: 8,
              }}
            >
              Evolve
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={openAddTeamModal}
        disabled={party.length >= 6 || boxedMonsOnly.length === 0}
        style={{
          minWidth: 92,
          minHeight: 132,
          background: party.length >= 6 ? "#2a2a2a" : "#1f2937",
          color: "#1f2937",
          border: "1px dashed #6b7280",
          borderRadius: 14,
          fontSize: 28,
          fontWeight: "bold",
          cursor: party.length >= 6 || boxedMonsOnly.length === 0 ? "not-allowed" : "pointer",
          opacity: party.length >= 6 || boxedMonsOnly.length === 0 ? 0.6 : 1,
        }}
        title={
          party.length >= 6
            ? "Party is full"
            : boxedMonsOnly.length === 0
            ? "No boxed Pokémon available"
            : "Add a boxed Pokémon to your team"
        }
      >
        +
      </button>
    </>
  )}
</div>

{showAddTeamModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      padding: 16,
    }}
    onClick={closeAddTeamModal}
  >
    <div
      style={{
        width: "min(760px, 100%)",
        maxHeight: "85vh",
        overflowY: "auto",
        background: "#1f1f1f",
        color: "#1f2937",
        borderRadius: 20,
        padding: 20,
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div>
          <h2 style={{ margin: 0 }}>Add to team</h2>
          <div style={{ color: "#aaa", marginTop: 6 }}>
            {selectedBoxMon ? "1 / 1 Pokémon selected to add to your team." : "Select one boxed Pokémon."}
          </div>
        </div>
        <button
          onClick={closeAddTeamModal}
          style={{ background: "transparent", color: "#ddd", border: "none", fontSize: 22, cursor: "pointer" }}
        >
          ✕
        </button>
      </div>

      <div
        style={{
          background: "#2a2a2a",
          borderRadius: 18,
          padding: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: 14,
          marginBottom: 18,
        }}
      >
        {boxedMonsOnly.map((mon, idx) => {
          const selected =
            selectedBoxMon &&
            selectedBoxMon.id === mon.id &&
            !!selectedBoxMon.shiny === !!mon.shiny &&
            selectedBoxMon.area === mon.area;
          return (
            <button
              key={mon.id + mon.shiny + mon.area + idx}
              onClick={() => setSelectedBoxMon(mon)}
              style={{
                background: selected ? "#3b3b3b" : "transparent",
                border: "none",
                borderRadius: 16,
                padding: 10,
                cursor: "pointer",
                color: "#1f2937",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 18,
                  borderRadius: "999px",
                  background: selected ? "rgba(255,255,255,0.16)" : "transparent",
                  margin: "26px auto -14px auto",
                }}
              />
              <img
                src={getSpriteUrl(mon.id)}
                alt={mon.id}
                style={{
                  width: 62,
                  height: 62,
                  imageRendering: "pixelated",
                  display: "block",
                  margin: "0 auto",
                  filter: mon.shiny ? "drop-shadow(0 0 6px rgba(255,215,0,0.55))" : "grayscale(0.1)",
                }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </button>
          );
        })}
      </div>

      <div style={{ fontSize: 16, marginBottom: 18 }}>
        {selectedBoxMon
          ? `Add ${selectedBoxMon.nickname || selectedBoxMon.id} to your team`
          : "Choose a boxed Pokémon to add to your team"}
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        <button
          onClick={closeAddTeamModal}
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: 14,
            fontSize: 16,
          }}
        >
          Cancel
        </button>
        <button
          onClick={confirmAddSelectedToTeam}
          disabled={!selectedBoxMon || party.length >= 6}
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: 14,
            fontSize: 16,
            background: !selectedBoxMon || party.length >= 6 ? "#333" : "#111",
            color: "#1f2937",
            border: "1px solid #cbd5e1",
            cursor: !selectedBoxMon || party.length >= 6 ? "not-allowed" : "pointer",
          }}
        >
          Add to team
        </button>
      </div>
    </div>
  </div>
)}

      <footer style={{ marginTop: 30, fontSize: 14, color: "#cbd5e1" }}>
        Nuzlocke Tracker &copy; 2025 | Custom for Wilting Y | Developed by Chris Roper & GPT
      </footer>
    </div>
  );

}

export default App;

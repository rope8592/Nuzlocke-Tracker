import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [storage, setStorage] = useState({});
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const data = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        data[key] = window.localStorage.getItem(key);
      }
      setStorage(data);
    } catch (err) {
      setError(String(err));
    }
  }, []);

  const summary = useMemo(() => {
    const out = [];
    const keys = [
      "nuzlocke-encounters",
      "nuzlocke-party",
      "nuzlocke-box",
      "nuzlocke-defeated-bosses",
      "nuzlocke-starter",
      "nuzlocke-player",
    ];

    keys.forEach((key) => {
      const raw = storage[key];
      if (!raw) return;

      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          out.push(`${key}: ${parsed.length} entries`);
        } else if (parsed && typeof parsed === "object") {
          out.push(`${key}: ${Object.keys(parsed).length} keys`);
        } else {
          out.push(`${key}: ${String(parsed)}`);
        }
      } catch {
        out.push(`${key}: ${String(raw).slice(0, 80)}`);
      }
    });

    return out;
  }, [storage]);

  const exportBackup = () => {
    try {
      const payload = {
        exportedAt: new Date().toISOString(),
        storage,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      link.href = url;
      link.download = `pwa-recovery-backup-${stamp}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(String(err));
    }
  };

  const copyBackup = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(storage, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "#f9fafb",
        padding: 16,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginTop: 0 }}>PWA Recovery Mode</h1>
      <p>
        This temporary screen is only for recovering your saved run from the installed PWA.
      </p>

      {error ? (
        <div
          style={{
            background: "#3b0d0d",
            border: "1px solid #ef4444",
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <button onClick={exportBackup} style={{ padding: "10px 14px" }}>
          Export Recovery Backup
        </button>
        <button onClick={copyBackup} style={{ padding: "10px 14px" }}>
          {copied ? "Copied" : "Copy Raw localStorage"}
        </button>
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: 18 }}>Detected keys</h2>
        {summary.length ? (
          <ul>
            {summary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : (
          <p>No localStorage keys found in this app context yet.</p>
        )}
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: 8,
          padding: 12,
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: 18 }}>Raw data</h2>
        <textarea
          readOnly
          value={JSON.stringify(storage, null, 2)}
          style={{
            width: "100%",
            minHeight: 400,
            background: "#0f172a",
            color: "#e5e7eb",
            border: "1px solid #374151",
            borderRadius: 6,
            padding: 10,
            fontFamily: "monospace",
            fontSize: 12,
          }}
        />
      </div>
    </div>
  );
}

export default App;

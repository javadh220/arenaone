import React from "react";

type Props = {
  denar: number;
  onPlay: () => void;
  onOpenDenar: () => void;
};

export default function Dashboard({
  denar,
  onPlay,
  onOpenDenar,
}: Props) {
  const username = "Javadh";
  const wins = 12;
  const losses = 5;

  const history = [
    { game: "EAFC 26", result: "Win" },
    { game: "EAFC 26", result: "Loss" },
    { game: "COD", result: "Win" },
    { game: "EAFC 26", result: "Win" },
  ];

  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <h2 style={styles.welcome}>
          Welcome, <span style={{ color: "#fff" }}>{username}</span>
        </h2>

        <button style={styles.denarButton} onClick={onOpenDenar}>
          <div style={styles.denarIcon}>D</div>
          <span style={styles.denarLabel}>Denar</span>
          <span style={styles.denarValue}>{denar}</span>
        </button>
      </div>

      {/* Main Card */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Game History</h3>

        <div style={{ marginBottom: 28 }}>
          {history.map((item, index) => (
            <div key={index} style={styles.historyRow}>
              <span>{item.game}</span>
              <span
                style={{
                  color:
                    item.result === "Win" ? "#22c55e" : "#ef4444",
                  fontWeight: 600,
                }}
              >
                {item.result}
              </span>
            </div>
          ))}
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <p style={styles.statLabel}>Wins</p>
            <p style={styles.statValue}>{wins}</p>
          </div>

          <div style={styles.statBox}>
            <p style={styles.statLabel}>Losses</p>
            <p style={styles.statValue}>{losses}</p>
          </div>
        </div>

        <div style={styles.balanceBox}>
          <p style={styles.statLabel}>Denar Balance</p>
          <p style={styles.balanceValue}>{denar}</p>
        </div>

        <button style={styles.playButton} onClick={onPlay}>
          PLAY
        </button>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0f2a44 0%, #070b1a 60%, #040711 100%)",
    color: "#fff",
    padding: 32,
    fontFamily: "system-ui, -apple-system",
  },

  topBar: {
    maxWidth: 900,
    margin: "0 auto 28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#cbd5f5",
    fontSize: 20,
    fontWeight: 500,
  },

  denarButton: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(15,31,51,0.8)",
    border: "1px solid rgba(255,210,125,0.35)",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },

  denarIcon: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#ffd27d",
    color: "#1a1a1a",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
  },

  denarLabel: {
    fontSize: 13,
    opacity: 0.7,
  },

  denarValue: {
    fontSize: 16,
    fontWeight: 700,
    color: "#ffd27d",
  },

  card: {
    maxWidth: 900,
    margin: "0 auto",
    background: "rgba(15,31,51,0.75)",
    backdropFilter: "blur(14px)",
    borderRadius: 20,
    padding: 32,
    boxShadow:
      "0 0 40px rgba(30,144,255,0.15), inset 0 0 1px rgba(255,255,255,0.15)",
  },

  sectionTitle: {
    marginBottom: 16,
    fontSize: 18,
  },

  historyRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    fontSize: 14,
  },

  statsRow: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 24,
    marginTop: 12,
  },

  statBox: {
    textAlign: "center",
  },

  statLabel: {
    color: "#94a3b8",
    fontSize: 13,
  },

  statValue: {
    fontSize: 28,
    fontWeight: 600,
  },

  balanceBox: {
    textAlign: "center",
    marginBottom: 28,
  },

  balanceValue: {
    fontSize: 32,
    fontWeight: 700,
    color: "#ffd27d",
  },

  playButton: {
    width: "100%",
    height: 56,
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(135deg, #1e90ff, #3aa0ff)",
    color: "white",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(30,144,255,0.4)",
  },
};
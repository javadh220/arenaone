type Props = {
  onBack?: () => void;
};

export default function ChooseGame({ onBack }: Props) {
  const games = [
    {
      name: "EAFC 26",
      description: "Competitive 1v1 football battles",
      available: true,
    },
    {
      name: "Call of Duty",
      description: "Head-to-head FPS domination",
      available: false,
    },
    {
      name: "NBA 2K",
      description: "Elite 1v1 court matchups",
      available: false,
    },
    {
      name: "Fortnite",
      description: "Skill-based battle royale duels",
      available: false,
    },
  ];

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.topBar}>
        <h2 style={styles.title}>Choose Your Arena</h2>

        {onBack && (
          <button style={styles.backButton} onClick={onBack}>
            Back
          </button>
        )}
      </div>

      {/* Game Grid */}
      <div style={styles.grid}>
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              opacity: game.available ? 1 : 0.6,
            }}
          >
            <h3 style={styles.gameTitle}>{game.name}</h3>
            <p style={styles.description}>{game.description}</p>

            {game.available ? (
              <button style={styles.playButton}>
                Enter Arena
              </button>
            ) : (
              <div style={styles.comingSoon}>
                Coming Soon
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0f2a44 0%, #070b1a 60%, #040711 100%)",
    color: "#fff",
    padding: 40,
    fontFamily: "system-ui, -apple-system",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: 600,
  },

  backButton: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },

  card: {
    background: "rgba(15,31,51,0.75)",
    borderRadius: 20,
    padding: 24,
    backdropFilter: "blur(14px)",
    boxShadow:
      "0 0 30px rgba(30,144,255,0.15), inset 0 0 1px rgba(255,255,255,0.15)",
    transition: "transform 0.2s ease",
  },

  gameTitle: {
    fontSize: 20,
    marginBottom: 8,
  },

  description: {
    opacity: 0.7,
    marginBottom: 20,
    fontSize: 14,
  },

  playButton: {
    width: "100%",
    padding: "12px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #1e90ff, #3aa0ff)",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },

  comingSoon: {
    textAlign: "center",
    padding: "12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.08)",
    fontWeight: 600,
    letterSpacing: 1,
  },
};
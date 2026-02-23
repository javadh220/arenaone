type Props = {
  onLogin: () => void;
  onCreateAccount: () => void;
};

export default function LoginPage({ onLogin, onCreateAccount }: Props) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Arena One</h1>
        <p style={styles.subtitle}>
          Competitive gaming. Organised. Trusted.
        </p>

        <input
          style={styles.input}
          placeholder="Email"
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
        />

        <button style={styles.primaryButton} onClick={onLogin}>
          Log in
        </button>

        <div style={styles.footerRow}>
          <span style={styles.link} onClick={onCreateAccount}>
            Create account
          </span>
          <span style={styles.link}>
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0f2a44 0%, #070b1a 55%, #040711 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: 380,
    padding: "32px",
    borderRadius: 18,
    background: "rgba(15, 31, 51, 0.75)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow:
      "0 0 40px rgba(30,144,255,0.15), inset 0 0 1px rgba(255,255,255,0.2)",
    color: "#fff",
    textAlign: "center",
  },

  title: {
    marginBottom: 6,
    fontSize: 22,
    fontWeight: 600,
  },

  subtitle: {
    marginBottom: 22,
    fontSize: 13,
    opacity: 0.7,
  },

  input: {
    width: "100%",
    padding: "13px 14px",
    marginBottom: 14,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(5,10,20,0.8)",
    color: "#fff",
    outline: "none",
    fontSize: 13,
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.6)",
  },

  primaryButton: {
    width: "100%",
    padding: "13px",
    marginTop: 6,
    background: "linear-gradient(135deg, #1e90ff, #3aa0ff)",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(30,144,255,0.35)",
  },

  footerRow: {
    marginTop: 18,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    opacity: 0.75,
  },

  link: {
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
};
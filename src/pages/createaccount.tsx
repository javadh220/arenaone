type Props = {
  onContinue: () => void;
};

export default function CreateAccount({ onContinue }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join Arena One</p>

        <input
          style={styles.input}
          placeholder="First name"
        />

        <input
          style={styles.input}
          placeholder="Last name"
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Email address"
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Confirm password"
        />

        <p style={styles.helper}>
          You’ll verify your email before choosing a plan.
        </p>

        <button
          type="button"
          style={styles.primaryButton}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0b2540 0%, #050f1d 70%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    background: "rgba(9, 22, 36, 0.9)",
    backdropFilter: "blur(6px)",
    padding: "44px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "440px",
    color: "#ffffff",
    textAlign: "center",
    boxShadow:
      "0 0 0 1px rgba(30,144,255,0.15), 0 20px 60px rgba(0,0,0,0.6)",
  },

  title: {
    fontSize: "26px",
    fontWeight: 700,
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "26px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#ffffff",
    outline: "none",
    fontSize: "14px",
  },

  helper: {
    fontSize: "13px",
    opacity: 0.65,
    marginBottom: "22px",
  },

  primaryButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background:
      "linear-gradient(135deg, #1e90ff 0%, #4aa3ff 100%)",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 0 18px rgba(30,144,255,0.45)",
  },
};
import React from "react";

type Props = {
  onFree: () => void;
  onCompetitive: () => void;
  onElite: () => void;
};

export default function ChoosePlan({
  onFree,
  onCompetitive,
  onElite,
}: Props) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Choose your plan</h1>
        <p style={styles.subtitle}>
          Pick how you want to compete on Arena One
        </p>

        <div style={styles.cardWrapper}>
          {/* FREE */}
          <div style={styles.card}>
            <h2 style={styles.planName}>Free</h2>

            <div style={styles.priceBlock}>
              <span style={styles.price}>R0</span>
              <span style={styles.perMonth}>Forever</span>
            </div>

            <ul style={styles.featureList}>
              <li style={styles.feature}>✓ Platform access</li>
              <li style={styles.feature}>✓ 3 1v1 games per week</li>
              <li style={styles.disabled}>✕ Tournaments</li>
              <li style={styles.disabled}>✕ Cash Prize Tournaments</li>
              <li style={styles.disabled}>✕ Matchmaking priority</li>
              <li style={styles.disabled}>✕ Exclusive events</li>
            </ul>

            <button style={styles.secondaryButton} onClick={onFree}>
              Start Free
            </button>
          </div>

          {/* COMPETITIVE */}
          <div style={styles.card}>
            <h2 style={styles.planName}>Competitive</h2>

            <div style={styles.priceBlock}>
              <span style={styles.price}>R149</span>
              <span style={styles.perMonth}>per month</span>
            </div>

            <ul style={styles.featureList}>
              <li style={styles.feature}>✓ Platform access</li>
              <li style={styles.feature}>✓ 10 1v1 games per week</li>
              <li style={styles.feature}>✓ Tournaments</li>
              <li style={styles.disabled}>✕ Cash Prize Tournaments</li>
              <li style={styles.disabled}>✕ Matchmaking priority</li>
              <li style={styles.disabled}>✕ Exclusive events</li>
            </ul>

            <button style={styles.secondaryButton} onClick={onCompetitive}>
              Go Competitive
            </button>
          </div>

          {/* ELITE */}
          <div style={{ ...styles.card, ...styles.eliteCard }}>
            <div style={styles.popularTag}>Most Popular</div>

            <h2 style={styles.planName}>Elite</h2>

            <div style={styles.priceBlock}>
              <span style={styles.price}>R249</span>
              <span style={styles.perMonth}>per month</span>
            </div>

            <ul style={styles.featureList}>
              <li style={styles.feature}>✓ Platform access</li>
              <li style={styles.feature}>✓ Unlimited 1v1 games</li>
              <li style={styles.feature}>✓ Tournaments</li>
              <li style={styles.feature}>✓ Cash Prize Tournaments</li>
              <li style={styles.feature}>✓ Matchmaking priority</li>
              <li style={styles.feature}>✓ Exclusive events</li>
            </ul>

            <button style={styles.primaryButton} onClick={onElite}>
              Go Elite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #12203a 0%, #070b1a 60%, #040711 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    color: "white",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  },

  container: {
    textAlign: "center",
    maxWidth: 1100,
    width: "100%",
  },

  title: {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 10,
    letterSpacing: "-0.5px",
  },

  subtitle: {
    opacity: 0.6,
    marginBottom: 60,
    fontSize: 15,
  },

  cardWrapper: {
    display: "flex",
    gap: 30,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "rgba(15,31,51,0.75)",
    backdropFilter: "blur(14px)",
    borderRadius: 20,
    padding: 30,
    width: 320,
    textAlign: "left",
    boxShadow:
      "0 0 40px rgba(30,144,255,0.1), inset 0 0 1px rgba(255,255,255,0.1)",
    position: "relative",
  },

  eliteCard: {
    border: "1px solid rgba(30,144,255,0.4)",
  },

  popularTag: {
    position: "absolute",
    top: -12,
    right: 20,
    background: "#1e90ff",
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  },

  planName: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },

  priceBlock: {
    marginBottom: 25,
  },

  price: {
    fontSize: 30,
    fontWeight: 800,
    display: "block",
  },

  perMonth: {
    fontSize: 13,
    opacity: 0.6,
  },

  featureList: {
    listStyle: "none",
    padding: 0,
    marginBottom: 30,
  },

  feature: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 500,
  },

  disabled: {
    marginBottom: 10,
    fontSize: 14,
    opacity: 0.4,
  },

  primaryButton: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #1e90ff, #3aa0ff)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  },

  secondaryButton: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "transparent",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
};
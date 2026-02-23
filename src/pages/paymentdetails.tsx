type Props = {
  planName: string;
  price: string;
  onConfirmPayment: () => void;
};

export default function PaymentDetails({
  planName,
  price,
  onConfirmPayment,
}: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b1c2d, #0f2a44)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "#0f1f33",
          padding: "40px",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>{planName} Plan</h1>
        <p style={{ opacity: 0.7, marginBottom: "30px" }}>
          Secure subscription checkout
        </p>

        <div
          style={{
            background: "#0b1c2d",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >
          <p style={{ margin: 0, opacity: 0.7 }}>Monthly Price</p>
          <h2 style={{ margin: "10px 0" }}>{price}</h2>
        </div>

        <button
          onClick={onConfirmPayment}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            background: "#1e90ff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Confirm & Continue
        </button>

        <p style={{ marginTop: "20px", fontSize: "12px", opacity: 0.6 }}>
          Payments are processed securely.
        </p>
      </div>
    </div>
  );
}
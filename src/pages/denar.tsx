type Props = {
  denar: number;
  onBack: () => void;
  onAddDenar: (amount: number) => void;
};

export default function DenarPage({
  denar,
  onBack,
  onAddDenar,
}: Props) {
  return (
    <div style={{ color: "white", padding: 40 }}>
      <h1>Denar</h1>

      <p>Current balance: {denar}</p>

      <button onClick={() => onAddDenar(50)}>
        Add 50 Denar
      </button>

      <br /><br />

      <button onClick={onBack}>
        Back to Dashboard
      </button>
    </div>
  );
}
export default function Badge({ label, style }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        padding: "3px 9px",
        borderRadius: 100,
        border: `1.5px solid ${style.border}`,
        background: style.bg,
        color: style.color,
        whiteSpace: "nowrap",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {label}
    </span>
  );
}

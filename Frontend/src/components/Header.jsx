export default function Header({ done, total, loading, onAddClick }) {
  return (
    <header
      style={{
        background: "#ede7e7",
        borderBottom: "1.5px solid #e8e8ee",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5", letterSpacing: "-0.5px" }}>
            ✓ Todos
          </span>
          {!loading && (
            <span style={{ fontSize: 13, color: "#aaa" }}>
              {done}/{total} done
            </span>
          )}
        </div>

        {}
        <button
          onClick={onAddClick}
          style={{
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "9px 18px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "inherit",
            letterSpacing: "0.01em",
          }}
        >
          + New Task
        </button>
      </div>
    </header>
  );
}

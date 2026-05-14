export default function Modal({ title, onClose, children }) {
  return (

    <div
      onClick={(e) => {

        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "0 16px",
        backdropFilter: "blur(2px)",
      }}
    >
      {}
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          width: "100%",
          maxWidth: 480,
          padding: "28px 30px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
        }}
      >
        {}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#111" }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "#f0f0f4",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              color: "#666",
              lineHeight: 1,
              width: 32,
              height: 32,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {}
        {children}
      </div>
    </div>
  );
}

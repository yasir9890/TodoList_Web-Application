import { useState } from "react";
import { PRIORITY, CATEGORY, inputStyle, labelStyle } from "../constants";

const DEFAULT_FORM = {
  title: "",
  description: "",
  isCompleted: false,
  priorityLevel: 0,
  categoryLevel: 0,
};

export default function TodoForm({ initial = {}, onSubmit, loading }) {

  const [form, setForm] = useState({ ...DEFAULT_FORM, ...initial });

  
  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {}
      <div>
        <label style={labelStyle}>Title *</label>
        <input
          style={inputStyle}
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="What needs to be done?"
          required
          autoFocus
        />
      </div>

      {}
      <div>
        <label style={labelStyle}>Description</label>
        <textarea
          style={{ ...inputStyle, resize: "vertical", minHeight: 80 }}
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Optional details…"
        />
      </div>

      {}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Priority</label>
          <select
            style={inputStyle}
            value={form.priorityLevel}
            onChange={(e) => set("priorityLevel", Number(e.target.value))}
          >
            {Object.entries(PRIORITY).map(([value, name]) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Category</label>
          <select
            style={inputStyle}
            value={form.categoryLevel}
            onChange={(e) => set("categoryLevel", Number(e.target.value))}
          >
            {Object.entries(CATEGORY).map(([value, name]) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </select>
        </div>
      </div>

      {}
      {"isCompleted" in initial && (
        <label style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, cursor: "pointer", color: "#444" }}>
          <input
            type="checkbox"
            checked={form.isCompleted}
            onChange={(e) => set("isCompleted", e.target.checked)}
            style={{ width: 16, height: 16, accentColor: "#4f46e5" }}
          />
          Mark as completed
        </label>
      )}

      {}
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 4,
          padding: "12px 0",
          background: loading ? "#a5b4fc" : "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          fontSize: 15,
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          letterSpacing: "0.02em",
          transition: "background 0.15s",
          fontFamily: "inherit",
        }}
      >
        {loading ? "Saving…" : "Save Task"}
      </button>
    </form>
  );
}

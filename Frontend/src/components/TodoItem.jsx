import { useState } from "react";
import Badge from "./Badge";
import { PRIORITY, CATEGORY, PRIORITY_STYLE, CATEGORY_STYLE } from "../constants";

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState(false);

  async function handleToggle() {
    setToggling(true);
    try {
      await onToggle(todo);
    } finally {
      setToggling(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm(`Delete "${todo.title}"?`)) return;
    setDeleting(true);
    try {
      await onDelete(todo.id);

    } catch {
      setDeleting(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "16px 20px",
        background: todo.isCompleted ? "#f8f8fc" : "#fff",
        borderRadius: 13,
        border: "1.5px solid #e8e8ee",
        opacity: deleting ? 0.4 : 1,
        transition: "opacity 0.2s, box-shadow 0.15s",
      }}
    >
      {}
      <button
        onClick={handleToggle}
        disabled={toggling}
        title={todo.isCompleted ? "Mark incomplete" : "Mark complete"}
        style={{
          marginTop: 3,
          flexShrink: 0,
          width: 22,
          height: 22,
          borderRadius: 6,
          border: todo.isCompleted ? "2px solid #4f46e5" : "2px solid #ccc",
          background: todo.isCompleted ? "#4f46e5" : "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: "all 0.15s",
        }}
      >
        {todo.isCompleted && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {}
      <div style={{ flex: 1, minWidth: 0 }}>
        {}
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 15,
            fontWeight: 600,
            color: todo.isCompleted ? "#aaa" : "#111",
            textDecoration: todo.isCompleted ? "line-through" : "none",
            wordBreak: "break-word",
          }}
        >
          {todo.title}
        </p>

        {}
        {todo.description && (
          <p style={{ margin: "0 0 9px", fontSize: 13, color: "#888", wordBreak: "break-word", lineHeight: 1.5 }}>
            {todo.description}
          </p>
        )}

        {}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
          <Badge label={PRIORITY[todo.priorityLevel]} style={PRIORITY_STYLE[todo.priorityLevel]} />
          <Badge label={CATEGORY[todo.categoryLevel]} style={CATEGORY_STYLE[todo.categoryLevel]} />
          <span style={{ fontSize: 11, color: "#c0c0c8", marginLeft: 2, fontFamily: "'DM Mono', monospace" }}>
            {new Date(todo.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        </div>
      </div>

      {}
      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
        <button
          onClick={() => onEdit(todo)}
          style={{
            background: "#eeecff",
            border: "none",
            borderRadius: 8,
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: 13,
            color: "#4f46e5",
            fontWeight: 700,
            fontFamily: "inherit",
          }}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          style={{
            background: "#fff0f0",
            border: "none",
            borderRadius: 8,
            padding: "6px 12px",
            cursor: deleting ? "not-allowed" : "pointer",
            fontSize: 13,
            color: "#dc2626",
            fontWeight: 700,
            fontFamily: "inherit",
          }}
        >
          {deleting ? "…" : "Delete"}
        </button>
      </div>
    </div>
  );
}

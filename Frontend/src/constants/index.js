export const API_BASE = "/api/Todo";

export const PRIORITY = { 0: "Low", 1: "Medium", 2: "High" };

export const CATEGORY = { 0: "Work", 1: "Personal" };

export const PRIORITY_STYLE = {
  0: { bg: "#e8f5e9", color: "#2e7d32", border: "#a5d6a7" },
  1: { bg: "#fff8e1", color: "#f57f17", border: "#ffe082" },
  2: { bg: "#fce4ec", color: "#c62828", border: "#f48fb1" },
};

export const CATEGORY_STYLE = {
  0: { bg: "#e3f2fd", color: "#1565c0", border: "#90caf9" },
  1: { bg: "#f3e5f5", color: "#6a1b9a", border: "#ce93d8" },
};

export const inputStyle = {
  width: "100%",
  padding: "10px 13px",
  borderRadius: 9,
  border: "1.5px solid #ddd",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  background: "#fafafa",
  color: "#111",
  boxSizing: "border-box",
};

export const labelStyle = {
  fontSize: 11,
  fontWeight: 700,
  color: "#888",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  marginBottom: 5,
  display: "block",
};

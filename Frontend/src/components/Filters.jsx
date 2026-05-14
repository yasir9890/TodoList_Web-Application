import { PRIORITY, CATEGORY, inputStyle } from "../constants";

export default function Filters({
  search,
  onSearchChange,
  filterCategory,
  onCategoryChange,
  filterPriority,
  onPriorityChange,
}) {
  const selectStyle = {
    ...inputStyle,
    width: "auto",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>

      {}
      <input
        type="search"
        placeholder="Search tasks…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ ...inputStyle, flex: "1 1 200px" }}
      />

      {}
      <select
        value={filterCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={selectStyle}
      >
        <option value="all">All Categories</option>
        {Object.entries(CATEGORY).map(([value, name]) => (
          <option key={value} value={value}>{name}</option>
        ))}
      </select>

      {}
      <select
        value={filterPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
        style={selectStyle}
      >
        <option value="all">All Priorities</option>
        {Object.entries(PRIORITY).map(([value, name]) => (
          <option key={value} value={value}>{name}</option>
        ))}
      </select>
    </div>
  );
}

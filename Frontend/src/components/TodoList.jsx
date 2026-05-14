import TodoItem from "./TodoItem";

export default function TodoList({ todos, loading, error, hasFilters, onToggle, onEdit, onDelete }) {

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0", color: "#bbb", fontSize: 15 }}>
        Loading…
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          background: "#fff0f0",
          border: "1.5px solid #f48fb1",
          borderRadius: 12,
          padding: "16px 20px",
          color: "#c62828",
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        <strong>⚠ Could not connect to the API.</strong>
        <br />
        Make sure your .NET server is running. ({error})
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "70px 0" }}>
        <div style={{ fontSize: 44, marginBottom: 14 }}>📋</div>
        <p style={{ color: "#bbb", fontSize: 16, margin: 0 }}>
          {hasFilters ? "No tasks match your filters." : "No tasks yet. Add one above!"}
        </p>
      </div>
    );
  }

  const pending   = todos.filter((t) => !t.isCompleted);
  const completed = todos.filter((t) =>  t.isCompleted);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[...pending, ...completed].map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

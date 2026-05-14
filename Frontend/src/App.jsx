import { useState } from "react";

import { useTodos } from "./hooks/useTodos";

import Header   from "./components/Header";
import Filters  from "./components/Filters";
import TodoList from "./components/TodoList";
import Modal    from "./components/Modal";
import TodoForm from "./components/TodoForm";

export default function App() {

  const {
    todos,
    loading,
    error,
    search,
    setSearch,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
  } = useTodos();

  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [showAddModal, setShowAddModal]      = useState(false);
  const [todoToEdit, setTodoToEdit]          = useState(null);
  const [saving, setSaving]                  = useState(false);

  const filtered = todos.filter((t) => {
    if (filterCategory !== "all" && t.categoryLevel !== Number(filterCategory)) return false;
    if (filterPriority !== "all" && t.priorityLevel !== Number(filterPriority)) return false;
    return true;
  });

  const done  = filtered.filter((t) => t.isCompleted).length;
  const total = filtered.length;
  const hasFilters = search || filterCategory !== "all" || filterPriority !== "all";

  async function handleAdd(formData) {
    setSaving(true);
    try {
      await addTodo(formData);
      setShowAddModal(false);
    } catch (err) {
      alert("Error adding task: " + err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleEdit(formData) {
    setSaving(true);
    try {
      await editTodo(todoToEdit.id, formData);
      setTodoToEdit(null);
    } catch (err) {
      alert("Error saving task: " + err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleToggle(todo) {
    try {
      await toggleTodo(todo);
    } catch (err) {
      alert("Error updating task: " + err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await removeTodo(id);
    } catch (err) {
      alert("Error deleting task: " + err.message);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f4" }}>

      {}
      <Header
        done={done}
        total={total}
        loading={loading}
        onAddClick={() => setShowAddModal(true)}
      />

      {}
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "28px 24px 64px" }}>

        <Filters
          search={search}
          onSearchChange={setSearch}
          filterCategory={filterCategory}
          onCategoryChange={setFilterCategory}
          filterPriority={filterPriority}
          onPriorityChange={setFilterPriority}
        />

        <TodoList
          todos={filtered}
          loading={loading}
          error={error}
          hasFilters={hasFilters}
          onToggle={handleToggle}
          onEdit={setTodoToEdit}
          onDelete={handleDelete}
        />
      </main>

      {}
      {showAddModal && (
        <Modal title="New Task" onClose={() => setShowAddModal(false)}>
          <TodoForm onSubmit={handleAdd} loading={saving} />
        </Modal>
      )}

      {}
      {todoToEdit && (
        <Modal title="Edit Task" onClose={() => setTodoToEdit(null)}>
          <TodoForm initial={todoToEdit} onSubmit={handleEdit} loading={saving} />
        </Modal>
      )}
    </div>
  );
}

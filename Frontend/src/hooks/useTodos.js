import { useState, useEffect, useCallback } from "react";
import {
  getAllTodos,
  searchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../api/todoApi";

export function useTodos() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = search.trim()
        ? await searchTodos(search.trim())
        : await getAllTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {

    const timer = setTimeout(fetchTodos, search ? 350 : 0);
    return () => clearTimeout(timer);
  }, [fetchTodos, search]);

  async function addTodo(formData) {
    const created = await createTodo({
      title: formData.title,
      description: formData.description || null,
      priorityLevel: formData.priorityLevel,
      categoryLevel: formData.categoryLevel,
    });

    setTodos((prev) => [created, ...prev]);
    return created;
  }

  async function toggleTodo(todo) {
    const updated = await updateTodo(todo.id, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    return updated;
  }

  async function editTodo(id, formData) {
    const updated = await updateTodo(id, {
      title: formData.title,
      description: formData.description || null,
      isCompleted: formData.isCompleted,
      priorityLevel: formData.priorityLevel,
      categoryLevel: formData.categoryLevel,
    });
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    return updated;
  }

  async function removeTodo(id) {
    await deleteTodo(id);

    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return {
    todos,
    loading,
    error,
    search,
    setSearch,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
  };
}

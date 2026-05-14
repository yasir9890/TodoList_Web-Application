import { API_BASE } from "../constants";

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...options,
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => `HTTP ${res.status}`);
    throw new Error(msg || `HTTP ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export function getAllTodos() {
  return request(API_BASE);
}

export function searchTodos(name) {
  return request(`${API_BASE}/search?name=${encodeURIComponent(name)}`);
}

export function getTodoById(id) {
  return request(`${API_BASE}/${id}`);
}

export function createTodo(data) {
  return request(API_BASE, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateTodo(id, data) {
  return request(`${API_BASE}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteTodo(id) {
  return request(`${API_BASE}/${id}`, { method: "DELETE" });
}

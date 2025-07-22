import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        setTodos(response.data.todos);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to load todos.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (newTodo.trim() === "") return;

    const newTask = {
      todo: newTodo,
      completed: false,
      userId: 1,
    };

    try {
      const response = await axios.post(
        "https://dummyjson.com/todos/add",
        newTask,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setTodos((prev) => [response.data, ...prev]);
      setNewTodo("");
    } catch (err) {
      console.error("Error adding todo:", err);
      alert("Failed to add todo.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
      alert("Failed to delete todo.");
    }
  };

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      await axios.put(`https://dummyjson.com/todos/${id}`, {
        completed: !currentStatus,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !currentStatus } : todo
        )
      );
    } catch (err) {
      console.error("Error updating todo status:", err);
      alert("Failed to update status.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>📝 Todo App</h2>

      <div style={{ display: "flex", marginBottom: "20px", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
              boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id, todo.completed)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  fontSize: "16px",
                }}
              >
                {todo.todo}
              </span>
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;

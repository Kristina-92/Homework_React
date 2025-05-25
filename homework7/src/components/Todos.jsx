import React, { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }

  function handleCheckboxChange(id) {
    console.log(id);
    setTodos([
      ...todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      ),
    ]);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="todos">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              {todo.title}
              <input
                type="checkbox"
                value={todo.title}
                checked={todo.completed}
                onChange={() => {
                  handleCheckboxChange(todo.id);
                }}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Todos } from "./components/Todos";

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);

  useEffect(() => {
    console.log("Todos:", todos);
    // console.log("Hide Completed:", hideCompleted);
  }, [todos]);

  function AddTodo() {
    if (newTodo.trim() !== "") {
      let newTodoObject = {
        id: Math.ceil(Math.random() * 1000),
        item: newTodo,
        editedText: newTodo,
        completed: false,
        toEdit: false,
        actions: ["Delete", "Edit", "Save", "Cancel"],
      };
      console.log(newTodo);

      setTodos([...todos, newTodoObject]);
      setNewTodo("");
      // console.log(todos);
    } else {
      alert("No value has been entered\nPlease enter a value to add TODO item");
    }
  }

  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map((item) =>
        todo.id === item.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      ),
    ]);
  }

  function toggleHideCompleted() {
    setHideCompleted(!hideCompleted);
  }

  function deleteTodoItem(id) {
    console.log(id);
    setTodos([...todos.filter((item) => item.id !== id)]);
  }

  function startEditTodo(id) {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, toEdit: true } : todo
      ),
    ]);
  }

  function saveEditedTodo(id) {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? { ...todo, item: todo.editedText, toEdit: false }
          : todo
      ),
    ]);
  }

  function cancelEditTodo(id) {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? { ...todo, toEdit: false, editedText: todo.item }
          : todo
      ),
    ]);
  }

  function handleEditTodoTextChange(id, newText) {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, editedText: newText } : todo
      ),
    ]);
  }

  const todosToDisplay = hideCompleted
    ? todos.filter((todo) => !todo.completed)
    : todos;

  const completedCount = todos.filter((item) => item.completed).length;

  return (
    <div id="app">
      <input
        type="text"
        value={newTodo}
        placeholder="Enter TODO"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button type="button" onClick={AddTodo}>
        Add Element
      </button>

      {completedCount > 0 && (
        <h1>Number of Completed Items : {completedCount}</h1>
      )}

      <Todos
        todos={todosToDisplay}
        markTodoAsDone={markTodoAsDone}
        deleteTodoItem={deleteTodoItem}
        hideCompleted={hideCompleted}
        toggleHideCompleted={toggleHideCompleted}
        startEditTodo={startEditTodo}
        handleEditTodoTextChange={handleEditTodoTextChange}
        saveEditedTodo={saveEditedTodo}
        cancelEditTodo={cancelEditTodo}
      />
    </div>
  );
}

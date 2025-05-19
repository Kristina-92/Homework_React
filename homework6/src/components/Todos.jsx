import React from "react";

export const Todos = ({
  todos,
  markTodoAsDone,
  deleteTodoItem,
  hideCompleted,
  toggleHideCompleted,
  handleEditTodoTextChange,
  startEditTodo,
  saveEditedTodo,
  cancelEditTodo,
}) => {
  return todos.length === 0 && !hideCompleted ? (
    <h1>No Items Added to Array Yet !!! </h1>
  ) : (
    <div id="table-div">
      <button type="button" onClick={toggleHideCompleted}>
        {hideCompleted ? "Show Completed" : "Hide Completed"}
      </button>
      <table className="todos" border={"1px"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>
                  {todo.toEdit ? (
                    <input
                      type="text"
                      value={todo.editedText}
                      onChange={(e) => {
                        handleEditTodoTextChange(todo.id, e.target.value);
                      }}
                    />
                  ) : (
                    todo.item
                  )}
                </td>
                <td>
                  {
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => {
                        markTodoAsDone(todo);
                      }}
                    />
                  }
                </td>
                {todo.toEdit ? (
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        saveEditedTodo(todo.id);
                      }}
                    >
                      {todo.actions[2]}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        cancelEditTodo(todo.id);
                      }}
                    >
                      {todo.actions[3]}
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        deleteTodoItem(todo.id);
                      }}
                    >
                      {todo.actions[0]}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        startEditTodo(todo.id);
                      }}
                    >
                      {todo.actions[1]}
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

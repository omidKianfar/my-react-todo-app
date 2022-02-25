import React from "react";

import Auxx from "../assistant/Auxx/Auxx";

const TodoList = ({ todos, deleteTodo, editTodo, changeCompleteTodo }) => {
  return (
    <Auxx>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              disabled
            />
            <button onClick={() => deleteTodo(todo)}>Delete</button>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => changeCompleteTodo(todo)}>
              {todo.complete ? "Complete" : "UnComplete"}
            </button>
          </li>
        ))}
      </ol>
    </Auxx>
  );
};
export default TodoList;

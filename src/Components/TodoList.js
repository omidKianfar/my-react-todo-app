import React, { useContext } from "react";
import PropTypes from "prop-types";

import Auxx from "../Tools/Auxx";
import { todoContext } from "../hocs/Context";

const TodoList = () => {
  const { todos, deleteTodoHandler, editTodo, changeCompleteTodo } =
    useContext(todoContext);
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
            <button onClick={() => deleteTodoHandler(todo)}>Delete</button>
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

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodoHandler: PropTypes.func,
  editTodo: PropTypes.func,
  changeCompleteTodo: PropTypes.func,
};

import { useContext } from "react";
import PropTypes from "prop-types";

import { todoContext } from "../Hooks/TodoContext";
import Auxx from "../Tools/Auxx/Auxx";
import { deleteTodo } from "../Tools/CRUD/DeleteTodo";
import { editTodo } from "../Tools/CRUD/EditTodo";
import { changeCompleteTodo } from "../Tools/CRUD/ChangeCompleteTodo";

const TodoList = () => {
  const contextProps = useContext(todoContext);

  return (
    <Auxx>
      <ol>
        {contextProps.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              disabled
            />
            <button onClick={() => deleteTodo(todo, contextProps)}>
              Delete
            </button>
            <button onClick={() => editTodo(todo, contextProps)}>Edit</button>
            <button onClick={() => changeCompleteTodo(todo, contextProps)}>
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
};

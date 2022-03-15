import { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import { todoContext } from "../Hooks/TodoContext";
import { ChangeFiltersTodoCompleteDefault } from "../Tools/Filters/ChangeFiltersTodoCompleteDefault";
import { deleteTodo } from "../Tools/CRUD/DeleteTodo";
import { editTodo } from "../Tools/CRUD/EditTodo";
import { changeCompleteTodo } from "../Tools/CRUD/ChangeCompleteTodo";

const TodoFilterList = () => {
  const contextProps = useContext(todoContext);

  // when click change complete its hide and change todo filters state and show in selected value
  ChangeFiltersTodoCompleteDefault(contextProps);

  return (
    <Fragment>
      <ol>
        {contextProps.filters.map((todo) => (
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
              {todo.complete ? "Complete" : "UnComplete"} change
            </button>
          </li>
        ))}
      </ol>
    </Fragment>
  );
};
export default TodoFilterList;

TodoFilterList.propTypes = {
  filters: PropTypes.array,
};

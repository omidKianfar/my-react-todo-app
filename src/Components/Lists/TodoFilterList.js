import { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../Hooks/TodoContext";
import { ChangeFiltersTodoCompleteDefault } from "../../Tools/Filters/ChangeFiltersTodoCompleteDefault";

const TodoFilterList = () => {
  const contextProps = useContext(TodoContext);
  const { filters, deleteTodo, editTodo, changeCompleteTodo } = contextProps;

  // change todo position on list with todo complete value and use useEffect
  ChangeFiltersTodoCompleteDefault(contextProps);

  return (
    <div>
      <h1>Filter Todos List</h1>

      <ul>
        {filters.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              id="todoTitle"
              value={todo.title}
              size={50}
              readOnly
              disabled
            />

            <button onClick={() => deleteTodo(todo, contextProps)}>
              Delete
            </button>
            <button onClick={() => editTodo(todo, contextProps)}>Edit</button>
            <button onClick={() => changeCompleteTodo(todo, contextProps)}>
              change {todo.complete ? "Complete" : "UnComplete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoFilterList;

TodoFilterList.propTypes = {
  filters: PropTypes.array,
};

import { useContext } from "react";
import TodoContext from "../../Hooks/TodoContext";
import { ChangeFiltersTodoCompleteDefault } from "../../Tools/Filters/ChangeFiltersTodoCompleteDefault";
import PropTypes from "prop-types";

const TodoFilterList = () => {
  const contextProps = useContext(TodoContext);

  // when click change complete its hide and change todo filters state and show in selected value
  ChangeFiltersTodoCompleteDefault(contextProps);

  const { filters, deleteTodo, editTodo, changeCompleteTodo } = contextProps;
  return (
    <ol>
      {filters.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            disabled
          />
          <button onClick={() => deleteTodo(todo, contextProps)}>Delete</button>
          <button onClick={() => editTodo(todo, contextProps)}>Edit</button>
          <button onClick={() => changeCompleteTodo(todo, contextProps)}>
            {todo.complete ? "Complete" : "UnComplete"} change
          </button>
        </li>
      ))}
    </ol>
  );
};
export default TodoFilterList;

// ---------------------------- prop types ------------------------------
TodoFilterList.propTypes = {
  filters: PropTypes.array,
};

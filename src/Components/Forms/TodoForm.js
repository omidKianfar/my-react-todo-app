import TodoContext from "../../Hooks/TodoContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ChangeFiltersDefault } from "../../Tools/Filters/ChangeFiltersDefault";

const TodoForm = () => {
  const contextProps = useContext(TodoContext);

  //show filters state when selected filter menu value based complete value
  ChangeFiltersDefault(contextProps);

  const { addTodo, inputTodo, setInputTodo, defaultRef, edit } = contextProps;
  return (
    <form onSubmit={(e) => addTodo(e, contextProps)}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        ref={defaultRef}
        maxLength="100"
        required
      />
      <input type="submit" value={edit ? "Update" : "Add"} />
    </form>
  );
};
export default TodoForm;

// ---------------------------- prop types ------------------------------
TodoForm.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
};

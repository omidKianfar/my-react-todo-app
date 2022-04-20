import { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../../../Tools/Filters/ChangeFiltersDefault";
import { addTodo } from "../../../Tools/CRUD/AddTodo/AddTodo";
import Styles from "./TodoForm.module.css";

const TodoForm = () => {
  const contextProps = useContext(TodoContext);
  const { inputTodo, setInputTodo, defaultRef, edit } = contextProps;

  //show filters state when selected filter menu value based complete value
  ChangeFiltersDefault(contextProps);

  return (
    <form
      className={Styles.todoForm}
      onSubmit={(e) => addTodo(e, contextProps)}
    >
      <input
        className={Styles.inputTodo}
        type="text"
        name="inputTodo"
        placeholder="Enter Todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        ref={defaultRef}
        size={50}
        maxLength="150"
        required
      />

      <input
        className={Styles.addInputTodo}
        type="submit"
        value={edit ? "Update Todo" : "Add Todo"}
      />
    </form>
  );
};
export default TodoForm;

TodoForm.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
};

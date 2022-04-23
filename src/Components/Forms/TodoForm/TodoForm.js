import { useContext } from "react";
import PropTypes from "prop-types";

import Styles from "./TodoForm.module.css";

import TodoContext from "../../../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../../../Tools/Filters/ChangeFiltersDefault";
import { addTodo } from "../../../Tools/CRUD/AddTodo/AddTodo";

const TodoForm = () => {
  const contextProps = useContext(TodoContext);
  const { inputTodo, setInputTodo, defaultRef, edit } = contextProps;

  //show filters state when selected filter menu value based complete value
  ChangeFiltersDefault(contextProps);

  return (
    <form onSubmit={(e) => addTodo(e, contextProps)}>
      <input
        className={Styles.input_todo}
        type="text"
        placeholder="Enter Todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        ref={defaultRef}
        maxLength="150"
        required
      />

      <input
        className={Styles.add_input_todo}
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

import { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../../../Tools/Filters/ChangeFiltersDefault";
import Styles from "./TodoFilterForm.module.css";

const TodoFilterForm = () => {
  const contextProps = useContext(TodoContext);
  const { filterTodos, setSelectValue, selectValue } = contextProps;

  //show filters state with complete value when change select with use Effect
  ChangeFiltersDefault(contextProps);

  return (
    <form
      className={Styles.todoFilterForm}
      onSubmit={() => filterTodos(contextProps)}
    >
      <label
        className={Styles.label}
        htmlFor="selectFilter"
        title="Filter todos with complete or uncomplete todo or all todos"
      >
        Choose filters
      </label>
      <select
        name="selectFilter"
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
      >
        <option value="All">all</option>
        <option value="true">Completed</option>
        <option value="false">UnComplete</option>
      </select>
    </form>
  );
};
export default TodoFilterForm;

TodoFilterForm.propTypes = {
  setSelectValue: PropTypes.func,
};

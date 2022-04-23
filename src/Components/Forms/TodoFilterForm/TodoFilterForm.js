import { useContext } from "react";
import PropTypes from "prop-types";

import Styles from "./TodoFilterForm.module.css";

import TodoContext from "../../../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../../../Tools/Filters/ChangeFiltersDefault";

const TodoFilterForm = () => {
  const contextProps = useContext(TodoContext);
  const { filterTodos, setSelectValue, selectValue } = contextProps;

  //show filters state with complete value when change select with use Effect
  ChangeFiltersDefault(contextProps);

  return (
    <form
      className={Styles.todo_filter_form}
      onSubmit={() => filterTodos(contextProps)}
    >
      <label htmlFor="select_filter">Choose filters</label>
      <select
        name="select_filter"
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
      >
        <option value="All">All</option>
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

import { useContext } from "react";
import TodoContext from "../../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../../Tools/Filters/ChangeFiltersDefault";
import PropTypes from "prop-types";

const TodoFilterForm = () => {
  const contextProps = useContext(TodoContext);

  //show filters state when selected filter menu value based complete value
  ChangeFiltersDefault(contextProps);

  const { filterTodos, setSelectValue, selectValue } = contextProps;
  return (
    <form onSubmit={() => filterTodos(contextProps)}>
      <select
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
      >
        <option value="all">all</option>
        <option value="true">Completed</option>
        <option value="false">UnComplete</option>
      </select>
    </form>
  );
};
export default TodoFilterForm;

// ---------------------------- prop types ------------------------------
TodoFilterForm.propTypes = {
  setSelectValue: PropTypes.func,
};

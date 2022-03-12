import { useContext } from "react";
import PropTypes from "prop-types";

import { todoContext } from "../Hooks/TodoContext";
import { ChangeFiltersDefault } from "../Tools/Filters/ChangeFiltersDefault";
import Auxx from "../Tools/Auxx/Auxx";
import { filterTodos } from "../Tools/Filters/FilterTodos";

const TodoFilterForm = () => {
  const contextProps = useContext(todoContext);

  //show filters state when selected filter menu value based complete value
  ChangeFiltersDefault(contextProps);

  return (
    <Auxx>
      <form onSubmit={() => filterTodos(contextProps)}>
        <select onChange={(e) => contextProps.setSelectValue(e.target.value)}>
          <option value="all">all</option>
          <option value="true">Completed</option>
          <option value="false">UnComplete</option>
        </select>
      </form>
    </Auxx>
  );
};
export default TodoFilterForm;

TodoFilterForm.propTypes = {
  setSelectValue: PropTypes.func,
};

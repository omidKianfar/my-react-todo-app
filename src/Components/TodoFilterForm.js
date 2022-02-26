import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import Auxx from "../Tools/Auxx";
import { todoContext } from "../hocs/Context";

const TodoFilterForm = () => {
  const { selectValue, setSelectValue, filterTodos } = useContext(todoContext);

  useEffect(() => {
    if (selectValue) {
      filterTodos(selectValue);
    }
  }, [selectValue]);

  return (
    <Auxx>
      <form onSubmit={() => filterTodos(selectValue)}>
        <select onChange={(e) => setSelectValue(e.target.value)}>
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
  selectValue: PropTypes.string,
  setSelectValue: PropTypes.func,
  filterTodos: PropTypes.func,
};

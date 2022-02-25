import React, { useEffect } from "react";

import Auxx from "../assistant/Auxx/Auxx";

const TodoFilterForm = ({ selectValue, setSelectValue, filterTodos }) => {
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

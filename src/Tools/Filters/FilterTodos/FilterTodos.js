import PropTypes from "prop-types";

import { allTodos } from "./AllTodos";
import { filterCompleteFalse } from "./FilterCompleteFalse";
import { filterCompleteTrue } from "./FilterCompleteTrue";

// filters todos
export const filterTodos = (props) => {
  switch (props.selectValue) {
    case "all":
      allTodos(props);
      break;

    case "true":
      filterCompleteTrue(props);
      break;

    case "false":
      filterCompleteFalse(props);
      break;
  }
};

filterTodos.propTypes = {
  todos: PropTypes.array,
  setFilters: PropTypes.func,
  selectValue: PropTypes.string,
  setShow: PropTypes.func,
};

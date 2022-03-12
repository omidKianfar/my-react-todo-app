import { useEffect } from "react";
import PropTypes from "prop-types";

import { filterTodos } from "./FilterTodos";

export const ChangeFiltersDefault = (props) => {
  useEffect(() => {
    if (props.selectValue) {
      filterTodos(props);
    }
  }, [props.selectValue]);
};

ChangeFiltersDefault.propTypes = {
  selectValue: PropTypes.string,
};

import { useEffect } from "react";
import PropTypes from "prop-types";

import { filterTodos } from "./FilterTodos/FilterTodos";

//show filters state with complete value when change select with use Effect
export const ChangeFiltersDefault = (props) => {
  const { selectValue } = props;
  useEffect(() => {
    if (selectValue) {
      filterTodos(props);
    }
  }, [selectValue]);
};

ChangeFiltersDefault.propTypes = {
  selectValue: PropTypes.string,
};

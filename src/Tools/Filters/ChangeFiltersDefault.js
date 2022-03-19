import { useEffect } from "react";
import { filterTodos } from "./FilterTodos";
import PropTypes from "prop-types";

export const ChangeFiltersDefault = (props) => {
  const { selectValue } = props;
  useEffect(() => {
    if (selectValue) {
      filterTodos(props);
    }
  }, [selectValue]);
};

// ---------------------------- prop types ------------------------------
ChangeFiltersDefault.propTypes = {
  selectValue: PropTypes.string,
};

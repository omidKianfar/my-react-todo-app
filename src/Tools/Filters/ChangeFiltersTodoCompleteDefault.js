import { useEffect } from "react";
import PropTypes from "prop-types";

import { filterTodos } from "./FilterTodos/FilterTodos";

// change todo position on list with todo complete value and use useEffect
export const ChangeFiltersTodoCompleteDefault = (props) => {
  const { changeComplete, setChangeComplete } = props;
  useEffect(() => {
    if (changeComplete) {
      filterTodos(props);
    }

    setChangeComplete(false);
  }, [changeComplete]);
};

ChangeFiltersTodoCompleteDefault.propTypes = {
  changeComplete: PropTypes.bool,
  setChangeComplete: PropTypes.func,
};

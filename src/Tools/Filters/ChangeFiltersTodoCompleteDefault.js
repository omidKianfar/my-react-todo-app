import { useEffect } from "react";
import { filterTodos } from "./FilterTodos";
import PropTypes from "prop-types";

export const ChangeFiltersTodoCompleteDefault = (props) => {
  const { changeComplete, setChangeComplete } = props;
  useEffect(() => {
    if (changeComplete) {
      filterTodos(props);
      setChangeComplete(false);
    }
  }, [changeComplete]);
};

// ---------------------------- prop types ------------------------------
ChangeFiltersTodoCompleteDefault.propTypes = {
  changeComplete: PropTypes.bool,
  setChangeComplete: PropTypes.func,
};

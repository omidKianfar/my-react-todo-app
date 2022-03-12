import { useEffect } from "react";
import PropTypes from "prop-types";

import { filterTodos } from "./FilterTodos";

export const ChangeFiltersTodoCompleteDefault = (props) => {
  useEffect(() => {
    if (props.changeComplete) {
      filterTodos(props);

      props.setChangeComplete(false);
    }
  }, [props.changeComplete]);
};

ChangeFiltersTodoCompleteDefault.propTypes = {
  changeComplete: PropTypes.bool,
  setChangeComplete: PropTypes.func,
};

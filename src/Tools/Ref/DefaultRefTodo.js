import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const DefaultRefTodo = (inputTodo) => {
  const refInputTodo = useRef();
  useEffect(() => {
    if (!inputTodo) refInputTodo.current.focus();
  }, [inputTodo]);

  return refInputTodo;
};

DefaultRefTodo.propTypes = {
  inputTodo: PropTypes.string,
};

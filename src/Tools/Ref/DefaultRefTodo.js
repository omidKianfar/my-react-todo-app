import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// focus on input when render and rerender Layout
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

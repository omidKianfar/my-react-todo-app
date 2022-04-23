import PropTypes from "prop-types";

import { addTodoHandler } from "./AddTodoHandler";
import { updateTodoHandler } from "../UpdateTodo/UpdateTodoHandler";

export const addTodo = (e, props) => {
  e.preventDefault();

  const { edit, setLoading, setSelectValue, setEdit, setInputTodo } = props;
  if (!edit) {
    addTodoHandler(props);
    setLoading(true);
    setSelectValue("All");
  } else {
    updateTodoHandler(props);
    setEdit(null);
  }
  setInputTodo("");
};

addTodo.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
  setEdit: PropTypes.func,
  setLoading: PropTypes.func,
};

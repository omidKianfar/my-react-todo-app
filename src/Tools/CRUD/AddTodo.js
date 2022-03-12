import PropTypes from "prop-types";

import { createTodoDbJson } from "../../JsonCrud/JsonCrud";
import { updateTodo } from "../CRUD/UpdateTodo";

export const addTodo = (e, props) => {
  e.preventDefault();

  const { edit, setEdit, inputTodo, setInputTodo, setLoading } = props;
  if (!edit) {
    const todo = {
      id: Math.floor(Math.random().toFixed(2) * 100),
      title: inputTodo,
      complete: false,
    };
    addDbJsonHandler(todo);

    setLoading(true);

    setInputTodo("");
  } else {
    const { id, complete } = edit;
    updateTodo(id, inputTodo, complete, props);

    setEdit(null);

    setInputTodo("");
  }
};

// add todo object in db.json todos
const addDbJsonHandler = (todo) => {
  createTodoDbJson(todo);
};

addTodo.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
  setEdit: PropTypes.func,
  setLoading: PropTypes.func,
};

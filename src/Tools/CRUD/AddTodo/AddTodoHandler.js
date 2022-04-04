import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { createTodoDbJson } from "../../../JsonCrud/JsonCrud";

// add todo object in db.json todos
export const addTodoHandler = ({ inputTodo }) => {
  const todo = {
    id: uuidv4(),
    title: inputTodo,
    complete: false,
  };
  createTodoDbJson(todo);
};

addTodoHandler.propTypes = {
  inputTodo: PropTypes.string,
};

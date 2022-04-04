import PropTypes from "prop-types";

import { updateTodoDbJson } from "../../../JsonCrud/JsonCrud";

// update todo in db.json
export const updateDbJsonTodosTodo = (id, title, complete) => {
  const todoDetailes = {
    id: id,
    title: title,
    complete: complete,
  };
  updateTodoDbJson(id, todoDetailes);
};

updateDbJsonTodosTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
};

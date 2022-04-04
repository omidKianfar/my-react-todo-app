import PropTypes from "prop-types";

import { updateTodosTodo } from "./UpdateTodosTodo";
import { updateFiltersTodo } from "./UpdateFiltersTodo";
import { updateDbJsonTodosTodo } from "./UpdateDbJsonTodosTodo";

// call todos and filters and db.json func for update all in 1 func
export const updateTodo = (id, title, complete, props) => {
  updateTodosTodo(id, title, complete, props);
  updateFiltersTodo(id, title, complete, props);
  updateDbJsonTodosTodo(id, title, complete, props);
};

updateTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
};

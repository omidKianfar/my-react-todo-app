import PropTypes from "prop-types";

import { editTodoHandler } from "./EditTodoHandler";
import { focusEdit } from "./FocusEdit";

// edit todo and focus in input for edit
export const editTodo = (todo, props) => {
  editTodoHandler(todo, props);
  focusEdit(props);
};

editTodo.propTypes = {
  id: PropTypes.number,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setEdit: PropTypes.func,
};

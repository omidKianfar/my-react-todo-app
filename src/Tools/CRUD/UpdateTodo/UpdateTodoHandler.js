import PropTypes from "prop-types";

import { updateTodo } from "./UpdateTodo";

// update todo title todos abd filters state and db.json
export const updateTodoHandler = (props) => {
  const { edit, inputTodo } = props;
  const { id, complete } = edit;
  updateTodo(id, inputTodo, complete, props);
};

updateTodoHandler.propTypes = {
  inputTodo: PropTypes.string,
  edit: PropTypes.object,
};

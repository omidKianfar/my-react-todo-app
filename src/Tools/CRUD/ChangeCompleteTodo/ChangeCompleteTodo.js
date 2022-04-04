import PropTypes from "prop-types";

import { changeCompleteTodoHandler } from "./ChangeCompleteTodoHandler";
import { changeTodoCompleteInDbJson } from "./ChangeTodoCompleteInDbJson";

// change compelete in todos, db.json and setChangeComplete for rerender complete list
export const changeCompleteTodo = (todo, props) => {
  changeCompleteTodoHandler(todo, props);
  changeTodoCompleteInDbJson(todo);
  props.setChangeComplete(true);
};

changeCompleteTodo.propTypes = {
  setChangeComplete: PropTypes.func,
};

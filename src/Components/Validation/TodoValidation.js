import { Fragment, useContext } from "react";
import TodoContext from "../../Hooks/TodoContext";

const TodoValidation = () => {
  const { inputTodo } = useContext(TodoContext);

  let valid = "";

  if (inputTodo.length >= 85 && inputTodo.length <= 99) {
    valid = "Its too long chracter. maximum is 100 character";
  } else if (inputTodo.length == 100) {
    valid = "Maximum is 100 character";
  } else {
    valid = "";
  }

  return (
    <Fragment>
      <p>{valid}</p>
    </Fragment>
  );
};
export default TodoValidation;

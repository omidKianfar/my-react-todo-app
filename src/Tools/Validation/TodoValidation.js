import { useContext } from "react";
import { todoContext } from "../../Hooks/TodoContext";

const TodoValidation = () => {
  const { inputTodo } = useContext(todoContext);

  let valid = "";

  if (inputTodo.length >= 85 && inputTodo.length <= 99) {
    valid = "Its too long chracter. maximum is 100 character";
  } else if (inputTodo.length == 100) {
    valid = "Maximum is 100 character";
  } else {
    valid = "";
  }

  return (
    <div>
      <p>{valid}</p>
    </div>
  );
};
export default TodoValidation;

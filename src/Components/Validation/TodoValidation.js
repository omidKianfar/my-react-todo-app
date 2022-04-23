import { useContext, useEffect, useState } from "react";
import TodoContext from "../../Hooks/TodoContext";

import Styles from "./TodoValidation.module.css";

const TodoValidation = () => {
  const { inputTodo } = useContext(TodoContext);

  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  let inputTodoLength = inputTodo.length;

  useEffect(() => {
    if (inputTodoLength >= 130 && inputTodoLength <= 133) {
      setWarning("Its too long chracter. maximum is 100 character");
    } else {
      setWarning("");
    }
    if (inputTodoLength == 150) {
      setError("Maximum is 100 character");
    } else {
      setError("");
    }
  }, [inputTodoLength]);

  return (
    <div className={Styles.validBox}>
      {warning ? (
        <div className={Styles.warning}>
          <p>{warning}</p>
        </div>
      ) : error ? (
        <div className={Styles.error}>
          <p>{error}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TodoValidation;

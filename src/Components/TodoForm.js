import { useContext } from "react";
import PropTypes from "prop-types";

import { todoContext } from "../Hooks/TodoContext";
import Auxx from "../Tools/Auxx/Auxx";
import { addTodo } from "../Tools/CRUD/AddTodo";

const TodoForm = () => {
  const contextProps = useContext(todoContext);

  return (
    <Auxx>
      <form onSubmit={(e) => addTodo(e, contextProps)}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={contextProps.inputTodo}
          onChange={(e) => contextProps.setInputTodo(e.target.value)}
          ref={contextProps.defaultRef}
          required
        />
        <input type="submit" value={contextProps.edit ? "Update" : "Add"} />
      </form>
    </Auxx>
  );
};
export default TodoForm;

TodoForm.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
};

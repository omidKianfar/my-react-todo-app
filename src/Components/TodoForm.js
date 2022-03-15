import { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import { todoContext } from "../Hooks/TodoContext";
import { addTodo } from "../Tools/CRUD/AddTodo";

const TodoForm = () => {
  const contextProps = useContext(todoContext);

  return (
    <Fragment>
      <form onSubmit={(e) => addTodo(e, contextProps)}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={contextProps.inputTodo}
          onChange={(e) => contextProps.setInputTodo(e.target.value)}
          ref={contextProps.defaultRef}
          maxLength="100"
          required
        />
        <input type="submit" value={contextProps.edit ? "Update" : "Add"} />
      </form>
    </Fragment>
  );
};
export default TodoForm;

TodoForm.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
};

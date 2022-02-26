import React, { useContext } from "react";
import PropTypes from "prop-types";

import Auxx from "../Tools/Auxx";
import { todoContext } from "../hocs/Context";

const TodoForm = () => {
  // usecontext
  const {
    inputTodo,
    setInputTodo,
    todos,
    setTodos,
    setFilters,
    edit,
    setEdit,
    defaultRef,
    filters,
  } = useContext(todoContext);

  // add todo ----------------------------------------
  const addTodo = (e) => {
    e.preventDefault();

    if (!edit) {
      setTodos([
        ...todos,
        { id: Math.random(), title: inputTodo, complete: false },
      ]);
      setInputTodo("");
    } else {
      const { id, complete } = edit;
      updateTodo(id, inputTodo, complete);
      updateFilterTodo(id, inputTodo, complete);
      setEdit(null);
      setInputTodo("");
    }
  };

  // update todo --------------------------------
  const updateTodo = (id, title, complete) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    setTodos(newTodo);
  };

  const updateFilterTodo = (id, title, complete) => {
    const newFilterTodo = filters.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    setFilters(newFilterTodo);
  };

  return (
    <Auxx>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          ref={defaultRef}
        />
        <input type="submit" value={edit ? "Update" : "Add"} />
      </form>
    </Auxx>
  );
};
export default TodoForm;

TodoForm.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setFilters: PropTypes.func,
  edit: PropTypes.object,
  setEdit: PropTypes.func,
  filters: PropTypes.array,
};

import React from "react";

import Auxx from "../assistant/Auxx/Auxx";

const TodoForm = ({
  inputTodo,
  setInputTodo,
  todos,
  setTodos,
  setFilters,
  edit,
  setEdit,
  refInputTodo,
}) => {
  const addTodo = (e) => {
    e.preventDefault();
    console.log(inputTodo);

    if (!edit) {
      setTodos([
        ...todos,
        { id: Math.random(), title: inputTodo, complete: false },
      ]);
      setInputTodo("");
      console.log(todos);
    } else {
      const { id, complete } = edit;
      updateTodo(id, inputTodo, complete);
    }
  };

  const updateTodo = (id, title, complete) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    setTodos(newTodo);
    setFilters(newTodo);
    setEdit("");
    setInputTodo("");
  };

  return (
    <Auxx>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          ref={refInputTodo}
        />
        <input type="submit" value={edit ? "Update" : "Add"} />
      </form>
    </Auxx>
  );
};
export default TodoForm;

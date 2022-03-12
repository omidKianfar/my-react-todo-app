import PropTypes from "prop-types";

export const editTodo = (
  { id },
  { todos, setEdit, setInputTodo, defaultRef }
) => {
  // map todos, find id equal todo
  const editTodo = todos.find((todo) => todo.id === id);
  setEdit(editTodo);

  setInputTodo(editTodo.title);

  // focus on Input for edit
  defaultRef.current.focus();
};

editTodo.propTypes = {
  id: PropTypes.number,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setEdit: PropTypes.func,
};

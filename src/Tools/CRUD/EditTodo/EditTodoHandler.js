import PropTypes from "prop-types";

// rdit todo from todos
export const editTodoHandler = ({ id }, { todos, setEdit, setInputTodo }) => {
  const editTodo = todos.find((todo) => todo.id === id);
  setEdit(editTodo);
  setInputTodo(editTodo.title);
};

editTodoHandler.propTypes = {
  id: PropTypes.number,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setEdit: PropTypes.func,
};

import PropTypes from "prop-types";

// delete todo from todos
export const deleteTodosTodo = ({ id }, { todos, setTodos }) => {
  const deleteTodosTodo = todos.filter((todo) => todo.id !== id);
  setTodos(deleteTodosTodo);
};

deleteTodosTodo.propTypes = {
  id: PropTypes.number,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

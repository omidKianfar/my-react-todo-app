import PropTypes from "prop-types";

// update todo in todos
export const updateTodosTodo = (id, title, complete, { todos, setTodos }) => {
  const newTodo = todos.map((todo) =>
    todo.id === id ? { id, title, complete } : todo
  );
  setTodos(newTodo);
};

updateTodosTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

import PropTypes from "prop-types";

// update search todo in todos
export const updateSearchTodo = (
  id,
  title,
  complete,
  { searchTodos, setSearchTodos }
) => {
  const newTodo = searchTodos.map((todo) =>
    todo.id === id ? { id, title, complete } : todo
  );
  setSearchTodos(newTodo);
};

updateSearchTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  searchTodos: PropTypes.array,
  setSearchTodos: PropTypes.func,
};

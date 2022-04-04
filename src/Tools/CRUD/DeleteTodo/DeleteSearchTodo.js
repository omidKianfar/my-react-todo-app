import PropTypes from "prop-types";

// delete todo from searchTodo list
export const deleteSearchTodo = ({ id }, { searchTodos, setSearchTodos }) => {
  const deleteSearchTodo = searchTodos.filter((todo) => todo.id !== id);
  setSearchTodos(deleteSearchTodo);
};

deleteSearchTodo.propTypes = {
  id: PropTypes.number,
  filters: PropTypes.array,
  setSearchTodos: PropTypes.func,
};

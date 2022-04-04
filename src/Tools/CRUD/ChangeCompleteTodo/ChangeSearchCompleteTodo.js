import PropTypes from "prop-types";

//change todos todo complete
export const changeSearchCompleteTodo = (
  { id, complete },
  { searchTodos, setSearchTodos }
) => {
  const changeComplete = searchTodos.map((todo) =>
    todo.id === id ? { ...todo, complete: !complete } : todo
  );
  setSearchTodos(changeComplete);
};

changeSearchCompleteTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  searchTodos: PropTypes.array,
  setSearchTodos: PropTypes.func,
};

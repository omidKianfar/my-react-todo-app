import PropTypes from "prop-types";

// update todo in filters
export const updateFiltersTodo = (
  id,
  title,
  complete,
  { filters, setFilters }
) => {
  const newFilterTodo = filters.map((todo) =>
    todo.id === id ? { id, title, complete } : todo
  );
  setFilters(newFilterTodo);
};

updateFiltersTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

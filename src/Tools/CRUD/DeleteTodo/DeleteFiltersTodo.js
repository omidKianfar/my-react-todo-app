import PropTypes from "prop-types";

// delete todo from filters
export const deleteFiltersTodo = ({ id }, { filters, setFilters }) => {
  const deleteFiltersTodo = filters.filter((todo) => todo.id !== id);
  setFilters(deleteFiltersTodo);
};

deleteFiltersTodo.propTypes = {
  id: PropTypes.number,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

import PropTypes from "prop-types";

// filters todos have complete false
export const filterCompleteFalse = ({ setShow, todos, setFilters }) => {
  const filterCompleteFalse = todos.filter((todo) => todo.complete === false);
  setFilters(filterCompleteFalse);
  setShow(false);
};

filterCompleteFalse.propTypes = {
  todos: PropTypes.array,
  setFilters: PropTypes.func,
  setShow: PropTypes.func,
};

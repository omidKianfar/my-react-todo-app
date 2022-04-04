import PropTypes from "prop-types";

// filters todos have complete true
export const filterCompleteTrue = ({ setShow, todos, setFilters }) => {
  const filterCompleteTrue = todos.filter((todo) => todo.complete === true);
  setFilters(filterCompleteTrue);
  setShow(false);
};

filterCompleteTrue.propTypes = {
  todos: PropTypes.array,
  setFilters: PropTypes.func,
  setShow: PropTypes.func,
};

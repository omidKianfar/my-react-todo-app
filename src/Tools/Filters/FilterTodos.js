import PropTypes from "prop-types";

export const filterTodos = ({ selectValue, setShow, todos, setFilters }) => {
  switch (selectValue) {
    // show todos state
    case "all":
      setShow(true);
      break;

    // show filters state base complete
    case "true":
      const filterCompleteTrue = todos.filter((todo) => todo.complete === true);
      setFilters(filterCompleteTrue);

      setShow(false);
      break;

    // show filters state base unComplete
    case "false":
      const filterCompleteFalse = todos.filter(
        (todo) => todo.complete === false
      );
      setFilters(filterCompleteFalse);

      setShow(false);
      break;
  }
};

filterTodos.propTypes = {
  todos: PropTypes.array,
  setFilters: PropTypes.func,
  selectValue: PropTypes.string,
  setShow: PropTypes.func,
};

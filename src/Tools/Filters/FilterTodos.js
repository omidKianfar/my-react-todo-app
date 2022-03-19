import PropTypes from "prop-types";

export const filterTodos = (props) => {
  switch (props.selectValue) {
    case "all":
      allTodos(props);
      break;
    case "true":
      filterCompleteTrue(props);
      break;
    case "false":
      filterCompleteFalse(props);
      break;
  }
};

// ----------------------------- Func ------------------------------------
// show todos state ------------------------------------------------------
const allTodos = ({ setShow }) => {
  setShow(true);
};

// show filters state base complete --------------------------------------
const filterCompleteTrue = ({ setShow, todos, setFilters }) => {
  const filterCompleteTrue = todos.filter((todo) => todo.complete === true);
  setFilters(filterCompleteTrue);
  setShow(false);
};

// show filters state base unComplete -------------------------------------
const filterCompleteFalse = ({ setShow, todos, setFilters }) => {
  const filterCompleteFalse = todos.filter((todo) => todo.complete === false);
  setFilters(filterCompleteFalse);
  setShow(false);
};

// ---------------------------- prop types --------------------------------
filterTodos.propTypes = {
  todos: PropTypes.array,
  setFilters: PropTypes.func,
  selectValue: PropTypes.string,
  setShow: PropTypes.func,
};

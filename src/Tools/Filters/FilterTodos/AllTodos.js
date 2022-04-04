import PropTypes from "prop-types";

// show all todos in list
export const allTodos = ({ setShow }) => {
  setShow(true);
};

allTodos.propTypes = {
  setShow: PropTypes.func,
};

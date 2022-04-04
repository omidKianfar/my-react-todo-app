import PropTypes from "prop-types";

// focus on input for edit
export const focusEdit = ({ defaultRef }) => {
  defaultRef.current.focus();
};

focusEdit.propTypes = {
  id: PropTypes.number,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setEdit: PropTypes.func,
};

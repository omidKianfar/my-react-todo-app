import PropTypes from "prop-types";

export const editTodo = (todo, props) => {
  editTodoHandler(todo, props);
  focusEdit(props);
};

// ----------------------------- Func ------------------------------------
// map todos, find id equal todo ------
const editTodoHandler = ({ id }, { todos, setEdit, setInputTodo }) => {
  const editTodo = todos.find((todo) => todo.id === id);
  setEdit(editTodo);
  setInputTodo(editTodo.title);
};

// focus on Input for edit ----------------------------------------------
const focusEdit = ({ defaultRef }) => {
  defaultRef.current.focus();
};

// ---------------------------- prop types ------------------------------
editTodo.propTypes = {
  id: PropTypes.number,
  setInputTodo: PropTypes.func,
  todos: PropTypes.array,
  setEdit: PropTypes.func,
};

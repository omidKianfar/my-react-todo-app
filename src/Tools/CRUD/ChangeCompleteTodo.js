import { updateTodoDbJson } from "../../JsonCrud/JsonCrud";
import PropTypes from "prop-types";

export const changeCompleteTodo = (todo, props) => {
  changeCompleteTodoHandler(todo, props);
  changeTodoCompleteInDbJson(todo);
  props.setChangeComplete(true);
};

// ----------------------------- Func ------------------------------------
// map todos, find id equal todo id and update complete object --
const changeCompleteTodoHandler = ({ id, complete }, { todos, setTodos }) => {
  const changeComplete = todos.map((todo) =>
    todo.id === id ? { ...todo, complete: !complete } : todo
  );
  setTodos(changeComplete);
};

// change complete in db.json --------------------------------------------
const changeTodoCompleteInDbJson = ({ id, title, complete }) => {
  const todoDetailes = {
    id: id,
    title: title,
    complete: !complete,
  };
  updateTodoDbJson(id, todoDetailes);
};

// ---------------------------- prop types ------------------------------
changeCompleteTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setChangeComplete: PropTypes.func,
};

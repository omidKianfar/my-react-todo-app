import PropTypes from "prop-types";

import { updateTodoDbJson } from "../../JsonCrud/JsonCrud";

export const changeCompleteTodo = (
  { id, title, complete },
  { todos, setTodos, setChangeComplete }
) => {
  // map todos, find id equal todo id and update complete object
  const changeComplete = todos.map((todo) =>
    todo.id === id ? { ...todo, complete: !complete } : todo
  );
  setTodos(changeComplete);

  changeTodoCompleteInDbJson(id, title, complete);

  setChangeComplete(true);
};

// change complete in db.json
const changeTodoCompleteInDbJson = (id, title, complete) => {
  const todoDetailes = {
    id: id,
    title: title,
    complete: !complete,
  };
  updateTodoDbJson(id, todoDetailes);
};

changeCompleteTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setChangeComplete: PropTypes.func,
};

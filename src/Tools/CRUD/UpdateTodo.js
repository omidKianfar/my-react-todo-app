import PropTypes from "prop-types";

import { updateTodoDbJson } from "../../JsonCrud/JsonCrud";

export const updateTodo = (id, title, complete, props) => {
  updateTodosTodo(id, title, complete, props);

  updateFiltersTodo(id, title, complete, props);

  updateDbJsonTodosTodo(id, title, complete, props);
};

// map todos, find id equal todo id and set object
const updateTodosTodo = (id, title, complete, props) => {
  const newTodo = props.todos.map((todo) =>
    todo.id === id ? { id, title, complete } : todo
  );
  props.setTodos(newTodo);
};

// map filters, find id equal todo id and set object
const updateFiltersTodo = (id, title, complete, props) => {
  const newFilterTodo = props.filters.map((todo) =>
    todo.id === id ? { id, title, complete } : todo
  );
  props.setFilters(newFilterTodo);
};
// update todo when id equal to db.json todos id
const updateDbJsonTodosTodo = (id, title, complete) => {
  const todoDetailes = {
    id: id,
    title: title,
    complete: complete,
  };
  updateTodoDbJson(id, todoDetailes);
};

updateTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

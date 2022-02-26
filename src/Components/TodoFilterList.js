import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import Auxx from "../Tools/Auxx";
import { todoContext } from "../hocs/Context";

const TodoFilterList = () => {
  const {
    filters,
    filterTodos,
    deleteTodoHandler,
    editTodo,
    changeCompleteTodo,
    selectValue,
  } = useContext(todoContext);

  const [changeComplete, setChangeComplete] = useState(false);

  useEffect(() => {
    if (changeComplete) {
      filterTodos(selectValue);
      setChangeComplete(false);
    }
  }, [selectValue, changeComplete]);

  const changeCompleteFilters = (todo) => {
    changeCompleteTodo(todo);
    setChangeComplete(true);
  };

  return (
    <Auxx>
      <ol>
        {filters.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              disabled
            />
            <button onClick={() => deleteTodoHandler(todo)}>Delete</button>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => changeCompleteFilters(todo)}>
              {todo.complete ? "Complete" : "UnComplete"} change
            </button>
          </li>
        ))}
      </ol>
    </Auxx>
  );
};

export default TodoFilterList;

TodoFilterList.propTypes = {
  filters: PropTypes.array,
  filterTodos: PropTypes.func,
  selectValue: PropTypes.string,
  editTodo: PropTypes.func,
  deleteTodoHandler: PropTypes.func,
  changeCompleteTodo: PropTypes.func,
};

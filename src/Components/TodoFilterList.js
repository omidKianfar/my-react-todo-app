import React, { useState, useEffect } from "react";

import Auxx from "../assistant/Auxx/Auxx";

const TodoFilterList = ({
  filters,
  filterTodos,
  deleteTodo,
  editTodo,
  changeCompleteTodo,
  selectValue,
}) => {
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
            <button onClick={() => deleteTodo(todo)}>Delete</button>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => changeCompleteFilters(todo)}>
              {todo.complete ? "Complete" : "UnComplete"}
            </button>
          </li>
        ))}
      </ol>
    </Auxx>
  );
};

export default TodoFilterList;

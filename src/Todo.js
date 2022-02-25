import React, { useState, createRef, useEffect } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilterForm from "./Components/TodoFilterForm";
import TodoFilterList from "./Components/TodoFilterList";
import Auxx from "./assistant/Auxx/Auxx";

const Todo = () => {
  // state -----------------------------------------------------------
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);

  // hocs --------------------------------------------------------------
  useEffect(() => {
    refInputTodo.current.focus();
  }, []);

  useEffect(() => {
    if (inputTodo === "") refInputTodo.current.focus();
  });

  // func -----------------------------------------------------------

  // delete --------------------------
  const deleteTodo = ({ id }) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
    setFilters(deleteTodo);
  };

  // edit ---------------------------
  const editTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
    setInputTodo(findTodo.title);
    focus();
  };

  // focus --------------------------
  const refInputTodo = createRef();
  const focus = () => refInputTodo.current.focus();

  // change complete -----------------
  const changeCompleteTodo = ({ id }) => {
    const changeComplete = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(changeComplete);
  };

  // filter todos ---------------------
  const filterTodos = (selectValue) => {
    switch (selectValue) {
      case "all":
        setShow(true);
        break;

      case "true":
        const filterCompleteTrue = todos.filter(
          (todo) => todo.complete === true
        );
        setFilters(filterCompleteTrue);
        setShow(false);
        break;

      case "false":
        const filterCompleteFalse = todos.filter(
          (todo) => todo.complete === false
        );
        setFilters(filterCompleteFalse);
        setShow(false);
        break;
    }
  };

  return (
    <Auxx>
      {/* forms */}
      <TodoForm
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
        setFilters={setFilters}
        edit={edit}
        setEdit={setEdit}
        refInputTodo={refInputTodo}
      />
      <TodoFilterForm
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        filterTodos={filterTodos}
      />

      {/* lists */}
      {show ? (
        <TodoList
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          changeCompleteTodo={changeCompleteTodo}
        />
      ) : (
        <TodoFilterList
          filters={filters}
          filterTodos={filterTodos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          changeCompleteTodo={changeCompleteTodo}
          selectValue={selectValue}
        />
      )}
    </Auxx>
  );
};

export default Todo;

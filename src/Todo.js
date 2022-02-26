import React, { useState, useEffect } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilterForm from "./Components/TodoFilterForm";
import TodoFilterList from "./Components/TodoFilterList";
import Auxx from "./Tools/Auxx";
import { Focus } from "./Tools/Focus";
import { todoContext } from "./hocs/Context";

const Layout = () => {
  // local storage ---------------------------------------------------
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  // state -----------------------------------------------------------
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [edit, setEdit] = useState(null);
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);
  const defaultRef = Focus(inputTodo);

  // hocs -----------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // func -----------------------------------------------------------

  // delete --------------------------
  const deleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const deleteFilterTodo = (id) => {
    const deleteFilterTodo = filters.filter((todo) => todo.id !== id);
    setFilters(deleteFilterTodo);
  };

  const deleteTodoHandler = ({ id }) => {
    deleteTodo(id);
    deleteFilterTodo(id);
  };

  // edit ---------------------------
  const editTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
    setInputTodo(findTodo.title);
    focusEdit();
  };

  // focus --------------------------
  const focusEdit = () => defaultRef.current.focus();

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
      <todoContext.Provider
        value={{
          inputTodo,
          setInputTodo,
          todos,
          setTodos,
          setFilters,
          edit,
          setEdit,
          defaultRef,
          selectValue,
          setSelectValue,
          filterTodos,
          editTodo,
          deleteTodoHandler,
          changeCompleteTodo,
          filters,
          show,
        }}
      >
        {/* forms */}
        <TodoForm />
        <TodoFilterForm />

        {/* lists */}
        {show ? <TodoList /> : <TodoFilterList />}
      </todoContext.Provider>
    </Auxx>
  );
};
export default Layout;

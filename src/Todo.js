import React, { useState, useEffect } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilterForm from "./Components/TodoFilterForm";
import TodoFilterList from "./Components/TodoFilterList";
import Auxx from "./Tools/Auxx";
import { Focus } from "./Tools/Focus";
import { todoContext } from "./Hooks/Context";
import JsonCrud from "./JsonCrud/JsonCrud";

const Layout = () => {
  // state -----------------------------------------------------------
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const defaultRef = Focus(inputTodo);

  useEffect(() => {
    if (loading === true) {
      JsonCrud.getAllTodosDbJson(setTodos);
    }
    setLoading(false);
  });

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
    JsonCrud.deleteTodoDbJson(id);
  };

  // edit ---------------------------
  const editTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
    setInputTodo(findTodo.title);
    focusEdit();
  };

  // focus ---------------------------
  const focusEdit = () => defaultRef.current.focus();

  // change complete -----------------
  const changeCompleteTodo = ({ id, title, complete }) => {
    const changeComplete = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !complete } : todo
    );
    setTodos(changeComplete);

    changeTodoCompleteInDbJson(id, title, complete);
  };

  // change complete in db.json------
  const changeTodoCompleteInDbJson = (id, title, complete) => {
    const todoDetailes = {
      id: id,
      title: title,
      complete: !complete,
    };

    JsonCrud.updateTodoDbJson(id, todoDetailes);
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
          setLoading,
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

import { useState } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilterForm from "./Components/TodoFilterForm";
import TodoFilterList from "./Components/TodoFilterList";
import { todoContext } from "./Hooks/TodoContext";
import { GetAllData } from "./JsonCrud/GetAllData";
import { DefaultRefTodo } from "./Tools/Ref/DefaultRefTodo";
import TodoValidation from "./Tools/Validation/TodoValidation";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [changeComplete, setChangeComplete] = useState(false);

  // get data from db.json ------------
  GetAllData(loading, setTodos, setLoading);

  // focus Input default --------------
  const defaultRef = DefaultRefTodo(inputTodo);

  return (
    <todoContext.Provider
      value={{
        inputTodo,
        setInputTodo,
        todos,
        setTodos,
        filters,
        setFilters,
        edit,
        setEdit,
        defaultRef,
        selectValue,
        setSelectValue,
        setShow,
        setLoading,
        changeComplete,
        setChangeComplete,
      }}
    >
      <TodoForm />
      <TodoValidation />
      <TodoFilterForm />

      {show ? <TodoList /> : <TodoFilterList />}
    </todoContext.Provider>
  );
};
export default Todo;

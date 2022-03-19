import { useState } from "react";

// ----------------------------- Hook folder ----------------------------------
import TodoContext from "./Hooks/TodoContext";

// ----------------------------- Tools folder ---------------------------------
import { DefaultRefTodo } from "./Tools/Ref/DefaultRefTodo";
import { addTodo } from "./Tools/CRUD/AddTodo";
import { editTodo } from "./Tools/CRUD/EditTodo";
import { deleteTodo } from "./Tools/CRUD/DeleteTodo";
import { filterTodos } from "./Tools/Filters/FilterTodos";
import { changeCompleteTodo } from "./Tools/CRUD/ChangeCompleteTodo";

// ----------------------------- Components folder ---------------------------
import Main from "./Components/Main";

const Todo = () => {
  // ----------------------------- state ------------------------------------
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [changeComplete, setChangeComplete] = useState(false);

  // ----------------------------- Func ------------------------------------

  // focus Input default ---------------------------------------------------
  const defaultRef = DefaultRefTodo(inputTodo);

  const TodoContextProps = {
    inputTodo,
    setInputTodo,
    todos,
    setTodos,
    edit,
    setEdit,
    filters,
    setFilters,
    selectValue,
    setSelectValue,
    show,
    setShow,
    loading,
    setLoading,
    defaultRef,
    changeComplete,
    setChangeComplete,
    addTodo,
    editTodo,
    deleteTodo,
    filterTodos,
    changeCompleteTodo,
  };

  return (
    <TodoContext.Provider value={TodoContextProps}>
      <Main />
    </TodoContext.Provider>
  );
};
export default Todo;

import { Fragment, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import TodoContext from "../../Hooks/TodoContext";
import { DefaultRefTodo } from "../../Tools/Ref/DefaultRefTodo";
import { editTodo } from "../../Tools/CRUD/EditTodo/EditTodo";
import { deleteTodo } from "../../Tools/CRUD/DeleteTodo/DeleteTodo";
import { filterTodos } from "../../Tools/Filters/FilterTodos/FilterTodos";
import { changeCompleteTodo } from "../../Tools/CRUD/ChangeCompleteTodo/ChangeCompleteTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filters, setFilters] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [changeComplete, setChangeComplete] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchTodos, setSearchTodos] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  // focus Input default
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
    editTodo,
    deleteTodo,
    filterTodos,
    changeCompleteTodo,
    searchInput,
    setSearchInput,
    searchTodos,
    setSearchTodos,
    searchShow,
    setSearchShow,
    DeleteIcon,
    EditIcon,
    CheckCircleIcon,
  };

  return (
    <BrowserRouter>
      <TodoContext.Provider value={TodoContextProps}>
        <Fragment>
          <Navbar />
        </Fragment>
      </TodoContext.Provider>
    </BrowserRouter>
  );
};
export default Layout;

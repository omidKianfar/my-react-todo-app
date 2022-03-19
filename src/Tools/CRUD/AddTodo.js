import { v4 as uuidv4 } from "uuid";
import { createTodoDbJson } from "../../JsonCrud/JsonCrud";
import { updateTodo } from "../CRUD/UpdateTodo";
import PropTypes from "prop-types";

export const addTodo = (e, props) => {
  e.preventDefault();

  const { setLoading, setInputTodo, setEdit, setSelectValue } = props;
  if (!props.edit) {
    addTodoHandler(props);
    setLoading(true);
    setSelectValue("all");
  } else {
    updateTodoHandler(props);
    setEdit(null);
  }
  setInputTodo("");
};

// ----------------------------- Func ------------------------------------
// add todo --------------------------------------------------------------
const addTodoHandler = ({ inputTodo }) => {
  const todo = {
    id: uuidv4(),
    title: inputTodo,
    complete: false,
  };
  addDbJsonHandler(todo);
};

// add todo object in db.json todos -------------------------------------
const addDbJsonHandler = (todo) => {
  createTodoDbJson(todo);
};

// update todo ----------------------------------------------------------
const updateTodoHandler = (props) => {
  const { edit, inputTodo } = props;
  const { id, complete } = edit;
  updateTodo(id, inputTodo, complete, props);
};

// ---------------------------- prop types ------------------------------
addTodo.propTypes = {
  inputTodo: PropTypes.string,
  setInputTodo: PropTypes.func,
  edit: PropTypes.object,
  setEdit: PropTypes.func,
  setLoading: PropTypes.func,
};

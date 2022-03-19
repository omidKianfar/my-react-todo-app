import axios from "axios";

const baseUrl = "http://localhost:3050/todos";

const createTodoDbJson = async (task) => {
  const newTodo = await axios.post(baseUrl, task);
  return newTodo;
};

const deleteTodoDbJson = async (id) => {
  const deleteTodo = await axios.delete(`${baseUrl}/${id}`);
  return deleteTodo;
};

const updateTodoDbJson = async (id, payLoad) => {
  const newTodo = await axios.patch(`${baseUrl}/${id}`, payLoad);
  return newTodo;
};

const getAllTodosDbJson = async (setTodos) => {
  const todos = await axios
    .get(baseUrl)
    .then((response) => setTodos(response.data))
    .catch((error) => console.log(error));
  return todos;
};

export {
  createTodoDbJson,
  deleteTodoDbJson,
  updateTodoDbJson,
  getAllTodosDbJson,
};

import axios from "axios";

const baseUrl = "http://localhost:3050/todos";

export const createTodoDbJson = async (task) => {
  const newTodo = await axios.post(baseUrl, task);
  return newTodo;
};

export const deleteTodoDbJson = async (id) => {
  const deleteTodo = await axios.delete(`${baseUrl}/${id}`);
  return deleteTodo;
};

export const updateTodoDbJson = async (id, payLoad) => {
  const newTodo = await axios.patch(`${baseUrl}/${id}`, payLoad);
  return newTodo;
};

export const getAllTodosDbJson = async (setTodos) => {
  const todos = await axios
    .get(baseUrl)
    .then((response) => setTodos(response.data));
  return todos;
};

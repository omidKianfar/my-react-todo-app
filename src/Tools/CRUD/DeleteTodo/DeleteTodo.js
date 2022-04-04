import { deleteTodosTodo } from "./DeleteTodosTodo";
import { deleteFiltersTodo } from "./DeleteFiltersTodo";
import { deleteTodoDbJsonHandler } from "./DeleteTodoDbJsonHandler";
import { deleteSearchTodo } from "./DeleteSearchTodo";

// delete todo from todos,filters and db.json together
export const deleteTodo = (todoProp, props) => {
  deleteTodosTodo(todoProp, props);
  deleteFiltersTodo(todoProp, props);
  deleteTodoDbJsonHandler(todoProp);
  deleteSearchTodo(todoProp, props);
};

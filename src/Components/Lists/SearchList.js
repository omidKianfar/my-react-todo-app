import { useContext } from "react";
import TodoContext from "../../Hooks/TodoContext";

export const SearchList = () => {
  const contextProps = useContext(TodoContext);
  const { searchTodos, deleteTodo, editTodo, changeCompleteTodo } =
    contextProps;

  return (
    <div>
      <h1>Filter Todos List</h1>

      <ul>
        {searchTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              id="todoTitle"
              value={todo.title}
              size={50}
              readOnly
              disabled
            />

            <button onClick={() => deleteTodo(todo, contextProps)}>
              Delete
            </button>
            <button onClick={() => editTodo(todo, contextProps)}>Edit</button>
            <button onClick={() => changeCompleteTodo(todo, contextProps)}>
              {todo.complete ? "Complete" : "UnComplete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchList;

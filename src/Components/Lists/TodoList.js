import TodoContext from "../../Hooks/TodoContext";
import PropTypes from "prop-types";

const TodoList = () => {
  return (
    <TodoContext.Consumer>
      {(contextProps) => {
        const { todos, deleteTodo, editTodo, changeCompleteTodo } =
          contextProps;

        return (
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => e.preventDefault()}
                  disabled
                />
                <button onClick={() => deleteTodo(todo, contextProps)}>
                  Delete
                </button>
                <button onClick={() => editTodo(todo, contextProps)}>
                  Edit
                </button>
                <button onClick={() => changeCompleteTodo(todo, contextProps)}>
                  {todo.complete ? "Complete" : "UnComplete"}
                </button>
              </li>
            ))}
          </ol>
        );
      }}
    </TodoContext.Consumer>
  );
};
export default TodoList;

// ---------------------------- prop types ------------------------------
TodoList.propTypes = {
  todos: PropTypes.array,
};

import PropTypes from "prop-types";

import TodoContext from "../../Hooks/TodoContext";

const TodoList = () => {
  return (
    <TodoContext.Consumer>
      {(contextProps) => {
        const { todos, deleteTodo, editTodo, changeCompleteTodo } =
          contextProps;

        return (
          <div>
            <h1>Todos List</h1>

            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="text"
                    value={todo.title}
                    size={50}
                    readOnly
                    disabled
                  />

                  <button onClick={() => deleteTodo(todo, contextProps)}>
                    Delete
                  </button>
                  <button onClick={() => editTodo(todo, contextProps)}>
                    Edit
                  </button>
                  <button
                    onClick={() => changeCompleteTodo(todo, contextProps)}
                  >
                    {todo.complete ? "Complete" : "UnComplete"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </TodoContext.Consumer>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
};

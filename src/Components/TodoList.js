import React, { Component } from "react";
export default class TodoList extends Component {
  render() {
    const { todos, deleteTodo, editTodo, changeCompleteTodo } = this.props;
    return (
      <div>
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.title}
                onChange={(e) => e.preventDefault()}
                disabled
              />
              <button onClick={() => deleteTodo(todo)}>Delete</button>
              <button onClick={() => editTodo(todo)}>Edit</button>
              <button onClick={() => changeCompleteTodo(todo)}>
                {todo.complete ? "Complete" : "UnComplete"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

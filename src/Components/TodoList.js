import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.title}
                onChange={(e) => e.preventDefault()}
                disabled
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

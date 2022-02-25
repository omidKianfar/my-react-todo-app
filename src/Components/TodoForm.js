import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    const { addTodo, inputTodo, setInputTodo, refInputTodo, edit } = this.props;
    return (
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={inputTodo}
            onChange={setInputTodo}
            ref={refInputTodo}
          />
          <input type="submit" value={edit ? "Update" : "Add"} />
        </form>
      </div>
    );
  }
}

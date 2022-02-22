import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={this.props.inputTodo}
            onChange={this.props.setInputTodo}
            ref={this.props.refInputTodo}
          />
          <input type="submit" value={this.props.edit ? "Update" : "Add"} />
        </form>
      </div>
    );
  }
}

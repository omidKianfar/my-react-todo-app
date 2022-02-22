import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Todo"
            value={this.props.inputTodo}
            onChange={this.props.setInputTodo}
          />
        </form>
      </div>
    );
  }
}

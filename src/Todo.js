import React, { Component } from "react";

import TodoForm from "./Components/TodoForm";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
    };
  }

  setInputTodo = (e) => {
    this.setState({ inputTodo: e.target.value });
    console.log(this.state.inputTodo);
  };

  render() {
    return (
      <div>
        <TodoForm
          inputTodo={this.state.inputTodo}
          setInputTodo={this.setInputTodo}
        />
      </div>
    );
  }
}

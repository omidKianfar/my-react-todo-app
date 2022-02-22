import React, { Component } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
      todos: [],
    };
  }

  setInputTodo = (e) => {
    this.setState({ inputTodo: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), title: this.state.inputTodo, complete: false },
      ],
    });
    this.setState({ inputTodo: "" });
  };

  render() {
    return (
      <div>
        <TodoForm
          inputTodo={this.state.inputTodo}
          setInputTodo={this.setInputTodo}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

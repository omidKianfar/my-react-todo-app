import React, { Component } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
      todos: [],
      edit: "",
    };
  }

  setInputTodo = (e) => {
    this.setState({ inputTodo: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (!this.state.edit) {
      this.setState({
        todos: [
          ...this.state.todos,
          { id: Math.random(), title: this.state.inputTodo, complete: false },
        ],
      });
      this.setState({ inputTodo: "" });
    } else {
      this.updateTodo(
        this.state.edit.id,
        this.state.inputTodo,
        this.state.edit.complete
      );
    }
  };

  deleteTodo = ({ id }) => {
    const deleteTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: deleteTodo });
  };

  editTodo = ({ id }) => {
    const findTodo = this.state.todos.find((todo) => todo.id === id);
    this.setState({ edit: findTodo });
    this.setState({ inputTodo: findTodo.title });
  };

  updateTodo = (id, title, complete) => {
    const newTodo = this.state.todos.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    this.setState({ todos: newTodo });
    this.setState({ edit: "" });
    this.setState({ inputTodo: "" });
  };

  render() {
    return (
      <div>
        <TodoForm
          inputTodo={this.state.inputTodo}
          setInputTodo={this.setInputTodo}
          addTodo={this.addTodo}
          edit={this.state.edit}
        />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

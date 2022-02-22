import React, { Component } from "react";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilterForm from "./Components/TodoFilterForm";
import TodoFilterList from "./Components/TodoFilterList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
      todos: [],
      edit: "",
      filters: [],
      selectValue: "all",
      show: false,
    };
    this.refInputTodo = React.createRef();
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

    const deleteFilterTodo = this.state.filters.filter(
      (todo) => todo.id !== id
    );
    this.setState({ filters: deleteFilterTodo });
  };

  editTodo = ({ id }) => {
    const findTodo = this.state.todos.find((todo) => todo.id === id);
    this.setState({ edit: findTodo });
    this.setState({ inputTodo: findTodo.title });
    this.refInputTodo.current.focus();
  };

  updateTodo = (id, title, complete) => {
    const newTodo = this.state.todos.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    this.setState({ todos: newTodo });

    const newFilterTodo = this.state.filters.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    this.setState({ filters: newFilterTodo });

    this.setState({ edit: "" });
    this.setState({ inputTodo: "" });
  };

  changeCompleteTodo = ({ id }) => {
    const changeComplete = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    this.setState({ todos: changeComplete });

    const changeFilterComplete = this.state.filters.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    this.setState({ filters: changeFilterComplete });
  };

  changeSelectValue = (e) => {
    this.setState({ selectValue: e.target.value });
  };

  filterTodos = (selectValue) => {
    this.setState({ show: true });
    switch (selectValue) {
      case "all":
        this.setState({ show: false });
        break;
      case "true":
        const filterCompleteTrue = this.state.todos.filter(
          (todo) => todo.complete === true
        );
        this.setState({ filters: filterCompleteTrue });
        break;
      case "false":
        const filterCompleteFalse = this.state.todos.filter(
          (todo) => todo.complete === false
        );
        this.setState({ filters: filterCompleteFalse });
    }
  };

  componentDidMount() {
    this.refInputTodo.current.focus();
  }
  componentDidUpdate() {
    if (this.state.inputTodo === "") this.refInputTodo.current.focus();
  }

  render() {
    return (
      <div>
        <TodoForm
          inputTodo={this.state.inputTodo}
          setInputTodo={this.setInputTodo}
          addTodo={this.addTodo}
          edit={this.state.edit}
          refInputTodo={this.refInputTodo}
        />
        <TodoFilterForm
          selectValue={this.state.selectValue}
          changeSelectValue={this.changeSelectValue}
          filterTodos={this.filterTodos}
        />
        {!this.state.show ? (
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            changeCompleteTodo={this.changeCompleteTodo}
          />
        ) : (
          <TodoFilterList
            filters={this.state.filters}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            changeCompleteTodo={this.changeCompleteTodo}
            selectValue={this.state.selectValue}
            filterTodos={this.filterTodos}
          />
        )}
      </div>
    );
  }
}

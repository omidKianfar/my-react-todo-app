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
    const value = e.target.value;
    this.setState({ inputTodo: value });
  };

  addTodo = (e) => {
    e.preventDefault();

    const { inputTodo, edit, todos } = this.state;
    if (!edit) {
      this.setState({
        todos: [
          ...todos,
          { id: Math.random(), title: inputTodo, complete: false },
        ],
      });
      this.setState({ inputTodo: "" });
    } else {
      const { id, complete } = edit;
      this.updateTodo(id, inputTodo, complete);
    }
  };

  deleteTodo = ({ id }) => {
    const { todos, filters } = this.state;

    const deleteTodo = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: deleteTodo });

    const deleteFilterTodo = filters.filter((todo) => todo.id !== id);
    this.setState({ filters: deleteFilterTodo });
  };

  editTodo = ({ id }) => {
    const todos = this.state.todos;

    const findTodo = todos.find((todo) => todo.id === id);
    this.setState({ edit: findTodo });
    this.setState({ inputTodo: findTodo.title });

    this.refInputTodo.current.focus();
  };

  updateTodo = (id, title, complete) => {
    const { todos, filters } = this.state;

    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    this.setState({ todos: newTodo });

    const newFilterTodo = filters.map((todo) =>
      todo.id === id ? { id, title, complete } : todo
    );
    this.setState({ filters: newFilterTodo });

    this.setState({ edit: "" });
    this.setState({ inputTodo: "" });
  };

  changeCompleteTodo = ({ id }) => {
    const { todos, filters } = this.state;

    const changeComplete = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    this.setState({ todos: changeComplete });

    const changeFilterComplete = filters.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    this.setState({ filters: changeFilterComplete });
  };

  changeSelectValue = (e) => {
    const value = e.target.value;
    this.setState({ selectValue: value });
  };

  filterTodos = (selectValue) => {
    const todos = this.state.todos;

    this.setState({ show: true });

    switch (selectValue) {
      case "all":
        this.setState({ show: false });
        break;

      case "true":
        const filterCompleteTrue = todos.filter(
          (todo) => todo.complete === true
        );
        this.setState({ filters: filterCompleteTrue });
        break;

      case "false":
        const filterCompleteFalse = todos.filter(
          (todo) => todo.complete === false
        );
        this.setState({ filters: filterCompleteFalse });
        break;
    }
  };

  componentDidMount() {
    this.refInputTodo.current.focus();
  }

  componentDidUpdate() {
    const inputTodo = this.state.inputTodo;
    if (inputTodo === "") this.refInputTodo.current.focus();
  }

  render() {
    const { inputTodo, edit, todos, selectValue, filters } = this.state;
    return (
      <div>
        <TodoForm
          inputTodo={inputTodo}
          setInputTodo={this.setInputTodo}
          addTodo={this.addTodo}
          edit={edit}
          refInputTodo={this.refInputTodo}
        />
        <TodoFilterForm
          selectValue={selectValue}
          changeSelectValue={this.changeSelectValue}
          filterTodos={this.filterTodos}
        />
        {!this.state.show ? (
          <TodoList
            todos={todos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            changeCompleteTodo={this.changeCompleteTodo}
          />
        ) : (
          <TodoFilterList
            filters={filters}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            changeCompleteTodo={this.changeCompleteTodo}
            selectValue={selectValue}
            filterTodos={this.filterTodos}
          />
        )}
      </div>
    );
  }
}

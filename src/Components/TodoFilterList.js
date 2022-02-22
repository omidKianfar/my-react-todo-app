import React, { Component, memo } from "react";

export default memo(
  class TodoFilterList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        changeComplete: false,
      };
    }

    componentDidUpdate() {
      if (this.state.changeComplete) {
        this.props.filterTodos(this.props.selectValue);
        this.setState({ changeComplete: false });
      }
    }

    changeCompleteFilters = (todo) => {
      this.props.changeCompleteTodo(todo);
      this.setState({ changeComplete: true });
    };

    render() {
      return (
        <div>
          <ol>
            {this.props.filters.map((todo) => (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => e.preventDefault()}
                  disabled
                />
                <button onClick={() => this.props.deleteTodo(todo)}>
                  Delete
                </button>
                <button onClick={() => this.props.editTodo(todo)}>Edit</button>
                <button onClick={() => this.changeCompleteFilters(todo)}>
                  {todo.complete ? "Complete" : "UnComplete"} Change
                </button>
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
);

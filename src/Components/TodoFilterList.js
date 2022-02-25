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
      const changeComplete = this.state.changeComplete;
      const selectValue = this.props.selectValue;

      if (changeComplete) {
        this.props.filterTodos(selectValue);
        this.setState({ changeComplete: false });
      }
    }

    changeCompleteFilters = (todo) => {
      const changeCompleteTodo = this.props.changeCompleteTodo;

      changeCompleteTodo(todo);
      this.setState({ changeComplete: true });
    };

    render() {
      const { filters, deleteTodo, editTodo } = this.props;

      return (
        <div>
          <ol>
            {filters.map((todo) => (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => e.preventDefault()}
                  disabled
                />
                <button onClick={() => deleteTodo(todo)}>Delete</button>
                <button onClick={() => editTodo(todo)}>Edit</button>
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

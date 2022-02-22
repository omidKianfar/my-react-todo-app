import React, { Component, memo } from "react";

export default memo(
  class TodoFilterForm extends Component {
    componentDidUpdate() {
      if (this.props.selectValue) {
        this.props.filterTodos(this.props.selectValue);
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={() => this.props.filterTodos(this.props.selectValue)}>
            <select onChange={this.props.changeSelectValue}>
              <option value="all">all</option>
              <option value="true">Completed</option>
              <option value="false">UnComplete</option>
            </select>
          </form>
        </div>
      );
    }
  }
);

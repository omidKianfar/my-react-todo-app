import React, { Component, memo } from "react";

export default memo(
  class TodoFilterForm extends Component {
    componentDidUpdate() {
      const { selectValue, filterTodos } = this.props;

      if (selectValue) {
        filterTodos(selectValue);
      }
    }
    render() {
      const { selectValue, filterTodos, changeSelectValue } = this.props;

      return (
        <div>
          <form onSubmit={() => filterTodos(selectValue)}>
            <select onChange={changeSelectValue}>
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

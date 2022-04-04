import { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../Hooks/TodoContext";
import { GetAllData } from "../../JsonCrud/GetAllData";
import TodoFilterForm from "../Forms/TodoFilterForm";
import TodoForm from "../Forms/TodoForm";
import TodoFilterList from "../Lists/TodoFilterList";
import TodoList from "../Lists/TodoList";
import TodoValidation from "../Validation/TodoValidation";
import SearchTodo from "../Forms/SearchTodo";
import SearchList from "../Lists/SearchList";

const Main = () => {
  const { loading, setTodos, setLoading, searchShow, show } =
    useContext(TodoContext);

  // get data from db.json
  GetAllData(loading, setTodos, setLoading);

  return (
    <main>
      <h1>Todo App</h1>

      <section>
        <SearchTodo />
        <TodoFilterForm />
      </section>

      <section>
        <TodoForm />
        <TodoValidation />
      </section>

      <section>
        {searchShow ? (
          <SearchList />
        ) : (
          <>{show ? <TodoList /> : <TodoFilterList />}</>
        )}
      </section>
    </main>
  );
};
export default Main;

Main.propTypes = {
  loading: PropTypes.bool,
  setTodos: PropTypes.func,
  setLoading: PropTypes.func,
  show: PropTypes.bool,
};

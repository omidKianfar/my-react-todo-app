import { useContext } from "react";
import PropTypes from "prop-types";

import Styles from "./Main.module.css";

import TodoContext from "../../../Hooks/TodoContext";

import { GetAllData } from "../../../JsonCrud/GetAllData";

import TodoFilterForm from "../../Forms/TodoFilterForm/TodoFilterForm";
import TodoForm from "../../Forms/TodoForm/TodoForm";
import SearchTodo from "../../Forms/SearchTodo/SearchTodo";

import TodoFilterList from "../../Lists/TodoFilterList";
import TodoList from "../../Lists/TodoList";
import SearchList from "../../Lists/SearchList";

import TodoValidation from "../../Validation/TodoValidation";

const Main = () => {
  const { loading, setTodos, setLoading, searchShow, show } =
    useContext(TodoContext);

  // get data from db.json
  GetAllData(loading, setTodos, setLoading);

  return (
    <main>
      <section className={Styles.section1}>
        <h1>Todo App</h1>
        <TodoValidation />
        <TodoForm />
      </section>

      <section className={Styles.section2}>
        <div className={Styles.menu}>
          <div className={Styles.menu_search}>
            <SearchTodo />
          </div>

          <div className={Styles.menu_filter}>
            <TodoFilterForm />
          </div>
        </div>

        <div className={Styles.note}>
          {searchShow ? (
            <>
              <h1>Search Todos List</h1>
              <SearchList />
            </>
          ) : (
            <>
              {show ? (
                <>
                  <h1>Todos List</h1>
                  <TodoList />
                </>
              ) : (
                <>
                  <h1>Filter Todos List</h1>
                  <TodoFilterList />
                </>
              )}
            </>
          )}
        </div>
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

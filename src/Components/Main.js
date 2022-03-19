import { Fragment, useContext } from "react";

// ----------------------------- Hook folder ----------------------------------
import TodoContext from "../Hooks/TodoContext";
import { GetAllData } from "../JsonCrud/GetAllData";

// ----------------------------- Components folder ---------------------------
import TodoFilterForm from "./Forms/TodoFilterForm";
import TodoForm from "./Forms/TodoForm";
import TodoFilterList from "./Lists/TodoFilterList";
import TodoList from "./Lists/TodoList";
import TodoValidation from "./Validation/TodoValidation";

const Main = () => {
  const { loading, setTodos, setLoading, show } = useContext(TodoContext);

  // get data from db.json -------------------------------------------------
  GetAllData(loading, setTodos, setLoading);

  return (
    <Fragment>
      <TodoForm />
      <TodoValidation />
      <TodoFilterForm />

      {show ? <TodoList /> : <TodoFilterList />}
    </Fragment>
  );
};
export default Main;

import { useContext } from "react";

import Styles from "./SearchTodo.module.css";

import TodoContext from "../../../Hooks/TodoContext";
import { Search } from "../../../Tools/SearchTodo/Search";

const SearchTodo = () => {
  const contaxtProps = useContext(TodoContext);
  const { searchInput, setSearchInput } = contaxtProps;

  Search(contaxtProps);

  return (
    <div className={Styles.todo_search_form}>
      <label htmlFor="Search_input">Search</label>
      <input
        id="Search_input"
        type="text"
        placeholder="Search todo"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};
export default SearchTodo;

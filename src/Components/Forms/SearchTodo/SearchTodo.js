import { useContext } from "react";

import TodoContext from "../../../Hooks/TodoContext";
import { Search } from "../../../Tools/SearchTodo/Search";
import Styles from "./SearchTodo.module.css";

const SearchTodo = () => {
  const contaxtProps = useContext(TodoContext);
  const { searchInput, setSearchInput } = contaxtProps;

  Search(contaxtProps);

  return (
    <div className={Styles.todoSearchForm}>
      <label htmlFor="">Search</label>
      <input
        type="text"
        placeholder="Search todo"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};
export default SearchTodo;

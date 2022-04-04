import { useContext } from "react";

import TodoContext from "../../Hooks/TodoContext";
import { Search } from "../../Tools/SearchTodo/Search";

const SearchTodo = () => {
  const contaxtProps = useContext(TodoContext);
  const { searchInput, setSearchInput } = contaxtProps;

  Search(contaxtProps);

  return (
    <>
      <label htmlFor="">Search</label>
      <input
        type="text"
        placeholder="Enter todo"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
};
export default SearchTodo;

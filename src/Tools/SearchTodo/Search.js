import { useEffect } from "react";
import PropTypes from "prop-types";

//show searchTodo state with when type in todoInput
export const Search = (props) => {
  const { searchInput, todos, setSearchTodos, setSearchShow } = props;

  useEffect(() => {
    if (searchInput) {
      const search = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchTodos(search);
      setSearchShow(true);
    } else {
      setSearchShow(false);
    }
  }, [searchInput]);
};

Search.propTypes = {
  searchInput: PropTypes.string,
};

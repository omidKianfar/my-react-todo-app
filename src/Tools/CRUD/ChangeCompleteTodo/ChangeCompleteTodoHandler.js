import PropTypes from "prop-types";

//change todos todo complete
export const changeCompleteTodoHandler = (
  { id, complete },
  { todos, setTodos }
) => {
  const changeComplete = todos.map((todo) =>
    todo.id === id ? { ...todo, complete: !complete } : todo
  );
  setTodos(changeComplete);
};

changeCompleteTodoHandler.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

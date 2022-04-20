import { useContext } from "react";
import TodoContext from "../../Hooks/TodoContext";
import Styles from "./list.module.css";

export const SearchList = () => {
  const contextProps = useContext(TodoContext);
  const {
    searchTodos,
    deleteTodo,
    editTodo,
    changeCompleteTodo,
    DeleteIcon,
    EditIcon,
    CheckCircleIcon,
  } = contextProps;

  return (
    <div>
      {searchTodos.map((todo) => (
        <div className={Styles.cart} key={todo.id}>
          <p type="text">{todo.title}</p>

          <div className={Styles.buttons}>
            <DeleteIcon
              className={Styles.icon}
              sx={{ color: "#D84315" }}
              onClick={() => deleteTodo(todo, contextProps)}
            />
            <EditIcon
              className={Styles.icon}
              sx={{ color: "#0288D1" }}
              onClick={() => editTodo(todo, contextProps)}
            />
            <CheckCircleIcon
              className={`${Styles.icon} ${
                todo.complete
                  ? `${Styles.iconComplete}`
                  : `${Styles.iconUncomplete}`
              }`}
              onClick={() => changeCompleteTodo(todo, contextProps)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchList;

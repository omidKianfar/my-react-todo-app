import { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../Hooks/TodoContext";
import { ChangeFiltersTodoCompleteDefault } from "../../Tools/Filters/ChangeFiltersTodoCompleteDefault";
import Styles from "./list.module.css";

const TodoFilterList = () => {
  const contextProps = useContext(TodoContext);
  const {
    filters,
    deleteTodo,
    editTodo,
    changeCompleteTodo,
    DeleteIcon,
    EditIcon,
    CheckCircleIcon,
  } = contextProps;

  // change todo position on list with todo complete value and use useEffect
  ChangeFiltersTodoCompleteDefault(contextProps);

  return (
    <div>
      {filters.map((todo) => (
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
export default TodoFilterList;

TodoFilterList.propTypes = {
  filters: PropTypes.array,
};

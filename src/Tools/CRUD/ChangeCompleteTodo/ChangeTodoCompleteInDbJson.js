import PropTypes from "prop-types";

import { updateTodoDbJson } from "../../../JsonCrud/JsonCrud";

// vhange db.json complete
export const changeTodoCompleteInDbJson = ({ id, title, complete }) => {
  const todoDetailes = {
    id: id,
    title: title,
    complete: !complete,
  };
  updateTodoDbJson(id, todoDetailes);
};

changeTodoCompleteInDbJson.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
};

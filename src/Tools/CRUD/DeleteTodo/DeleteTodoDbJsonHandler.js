import PropTypes from "prop-types";

import { deleteTodoDbJson } from "../../../JsonCrud/JsonCrud";

// delete todo from db.json
export const deleteTodoDbJsonHandler = ({ id }) => {
  deleteTodoDbJson(id);
};

deleteTodoDbJsonHandler.propTypes = {
  id: PropTypes.number,
};

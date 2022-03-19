import { useEffect } from "react";
import PropTypes from "prop-types";

import { getAllTodosDbJson } from "./JsonCrud";

export const GetAllData = (loading, setTodos, setLoading) => {
  useEffect(() => {
    if (loading === true) {
      getAllTodosDbJson(setTodos);
      setLoading(false);
    }
  }, [loading]);
};

GetAllData.propTypes = {
  loading: PropTypes.bool,
  setTodos: PropTypes.func,
  setLoading: PropTypes.func,
};

import { Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import About from "../About/About";
import Main from "../Main/Main";
import Home from "../Home/Home";

import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          <ul className={Styles.ul}>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">App</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Fragment>
  );
};
export default Navbar;

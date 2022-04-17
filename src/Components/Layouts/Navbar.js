import { Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import About from "./About";
import Main from "./Main";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <header className={Styles.header}>
        <nav className={Styles.navbar}>
          <ul className={`${Styles.ul} ${Styles.flex_container} `}>
            <li>
              <NavLink to="/">Home</NavLink>
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
      </Switch>
    </Fragment>
  );
};
export default Navbar;

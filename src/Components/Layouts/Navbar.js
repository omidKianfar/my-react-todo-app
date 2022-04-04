import { Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";

import About from "./About";
import Main from "./Main";

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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

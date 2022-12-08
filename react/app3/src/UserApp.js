import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Users from './components/Users.js';
import Home from './components/Home.js';
import About from './components/About';
import Error404 from './components/Error404';


function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName='active' to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: 'pink' }} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: 'pink' }} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;

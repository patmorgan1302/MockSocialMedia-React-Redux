import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Routes.css';
import NodeArticles from './Componants/article-list';

export default function Routes(){
  return (
    <Router>
      <div>
        <nav>
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


function Home() {
  return <h2 className="h2">Poo</h2>;
}

function About() {
  return <NodeArticles/>;
}

function Users() {
  return <h2 className="h2">Users</h2>;
}

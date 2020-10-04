import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import JSArticles from "./Componants/javascript/javascript-articleList";
import NodeArticles from './Componants/node/node-articleList';
import CommentComment from './Componants/comment/comment';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jsarticles">JS Articles</Link>
          </li>
          <li>
            <Link to="/nodejs">NodeJS</Link>
          </li>
          <li>
            <Link to="/comment">Comment</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jsarticles">
            <Javascript />
          </Route>
          <Route path="/nodejs">
            <NodeJS />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Javascript() {
  return (
    <div>
     <JSArticles />
    </div>
  );
}

function NodeJS() {
  return (
    <div>
     <NodeArticles />
    </div>
  );
}

function Comment() {
  return (
    <div>
     <CommentComment />
    </div>
  );
}

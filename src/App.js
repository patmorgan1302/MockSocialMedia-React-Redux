import React from "react";
import './App.css';
// import Routes from './Routes';
import Comment from './Componants/comment/comment';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Routes from './Routes';



const App = () => {
  return(
    <div>
      <Comment />
      <h4 className="h4-class" >Welcome To My Website!</h4>
      <Routes />
      {/* <Router>
      <div>
        <nav>
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/nodearticles">Node Articles</Link>
            </li>
            
            <li>
              <Link to="/jsarticles">Javascript Articles</Link>
            </li>
          </ul>
        </nav>

      
        <Switch>
        <Route path="/">
            <Home />
          </Route>
        <Route path="/nodearticles">
            <NodejsArticles />
          </Route>
          <Route path="/jsarticles">
            <JavascriptArticles />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
    
  )
};


export default App;
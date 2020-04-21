import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPage from "./ListPage";
import Dealpage from "./DealPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/r/:subreddit/:id" component={Dealpage} />
          <Route exact path="/" component={ListPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

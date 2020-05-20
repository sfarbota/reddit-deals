import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import Navigation from "./components/Navbar";
import Home from "./pages/Homepage";
import ListPage from "./pages/ListPage";
import Dealpage from "./pages/DealPage";

function App() {
  return (
    <Provider>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:subreddit" component={ListPage} />
            <Route exact path="/:subreddit/:id" component={Dealpage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Dealpage from "./pages/DealPage";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/subreddits">Subreddits</Nav.Link>
                <Nav.Link href="#/account">Account</Nav.Link>
                <NavDropdown title="Category" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">r/buildapcsales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">r/GameSale</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">r/frugalmalefashion</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Switch>
          <Route exact path="/r/:subreddit/:id" component={Dealpage} />
          <Route exact path="/" component={ListPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

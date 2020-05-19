import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
  const [state, setState] = useContext(Context);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Link to="/">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/subreddits">Subreddits</Nav.Link>
            <Nav.Link href="#/account">Account</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                r/buildapcsales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">r/GameSale</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                r/frugalmalefashion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;

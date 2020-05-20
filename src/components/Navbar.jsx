import React from 'react';
import { images } from './categories';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {images.map(image => (
                <Link
                  className="dropdown-item"
                  key={image.title}
                  to={'/' + image.title}
                >
                  {image.title}
                </Link>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;

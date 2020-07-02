import React from "react";
import { categories } from "./categories";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Image } from "react-bootstrap";
import UserIcon from "../images/user.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Reddit Deals
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {categories.map((category) => (
                <Link
                  className="dropdown-item"
                  key={category.name}
                  to={"/" + category.name}
                >
                  {category.name}
                </Link>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#account">
              <Image src={UserIcon} className="user-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;

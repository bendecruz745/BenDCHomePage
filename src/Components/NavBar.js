import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>Ben's Site</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link
              to="BenDCHomePage"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <Link
              to="BenDCHomePage/Projects"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Link>
            <Link
              to="BenDCHomePage/About"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

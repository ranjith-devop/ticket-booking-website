import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="#">
          <img
            src="https://via.placeholder.com/120x40?text=Logo" // Replace with actual logo
            alt="Bus Logo"
            height="40"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto">
            <Nav.Link href="#">Offers</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>

            {/* Login Dropdown */}
            <NavDropdown title="Login" id="login-dropdown">
              <NavDropdown.Item href="#">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

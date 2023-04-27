import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import style from "./navbar.module.css";

function WineataNavbar() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className={style.nav}
      collapseOnSelect
    >
      <Container fluid>
        <Link href="/" passHref>
          <Navbar.Brand>Wineata</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Link href="/atlas" passHref>
              <Nav.Link>Wine atlas</Nav.Link>
            </Link>
            <Link href="/map" passHref>
              <Nav.Link>Wine map</Nav.Link>
            </Link>
            <Link href="/wineries" passHref>
              <Nav.Link>Wineries</Nav.Link>
            </Link>
            <Link href="/shop" passHref>
              <Nav.Link>Wine shop</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href="/register" passHref>
              <Nav.Link>Register</Nav.Link>
            </Link>
            <Link href="/login" passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WineataNavbar;

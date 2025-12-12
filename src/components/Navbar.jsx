import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FIGMA_URL = "https://gum-cream-89552792.figma.site";

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    🍽️ MatchBites
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button
                            variant="primary"
                            size="sm"
                            href={FIGMA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Try it yourself!
                        </Button>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

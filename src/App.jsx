import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <div className="app-root d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm w-100">
          <Container fluid className="no-padding">
            <Navbar.Brand as={Link} to="/">
              🍽️ MatchBites
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main content area */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center text-muted small py-3">
          © {new Date().getFullYear()} MatchBites — Find food, together.
        </footer>
      </div>
    </HashRouter>
  );
}

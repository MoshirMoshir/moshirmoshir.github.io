import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carrot from '@assets/Carrot.svg';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    document.documentElement.setAttribute('data-bs-theme', theme);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Carrot}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Moshir.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Link to="/" className="text-decoration-none text-reset">
                Moshir.dev
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/games">Games</Nav.Link>
              <Nav.Link href="https://github.com/MoshirMoshir/Moshir.dev-React" target="_blank" rel="noopener noreferrer">README.md</Nav.Link>
              <Nav.Item>
                <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')} className="btn btn-outline-secondary ms-2">
                {theme === 'dark' ? (
                    <i className="bi bi-sun-fill"></i> // Sun icon for dark mode
                  ) : (
                    <i className="bi bi-moon-fill"></i> // Moon icon for light mode
                  )}
                </button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;

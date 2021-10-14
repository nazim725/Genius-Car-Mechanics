import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
const Header = () => {

  const {user,logOut}=useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
          < Navbar.Toggle className="ms-5" />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/experts#experts">Experts</Nav.Link>
            
            {
              user.email? 
              <button className="btn btn-secondary me-3" onClick={logOut}>Logout</button>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            }

            <Navbar.Text clasName="ms-5">
                Signed in as:
            </Navbar.Text>
            <img className="login-pic" src={user?.photoURL} alt="" />   

            </Navbar.Collapse>
          <Nav className="me-auto">
            
          </Nav>
          </Container>
        </Navbar>
    
      </>
    );
};

export default Header;
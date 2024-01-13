import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleDestinationClick = () => {
    navigate('/province');
  };

  const handlePlanningTripClick = () => {
    navigate('/schedule'); 
  };


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img
          src="/photos/logo-removebg-preview.png"
          alt=""
          height="75"
          width="160"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
          <Nav.Link onClick={handleDestinationClick}>Destination</Nav.Link>
          <Nav.Link onClick={handlePlanningTripClick}>Planning-Trip</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
        <div className="button">
          <Link to="/login">
            <Button variant="outline-success">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-danger mx-3">Sign Up</Button>
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

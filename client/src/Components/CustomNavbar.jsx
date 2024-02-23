import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const CustomNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='custom-nav'>
         <Navbar
      collapseOnSelect
      expand="lg"
      bg={scrolling ? 'light' : 'transparent'}
      variant={scrolling ? 'light' : 'dark'}
      className={scrolling ? 'shadow-sm navbar-light' : 'edit'}
      style={{ transition: 'background-color 0.3s' }}
    >
      <Navbar.Brand href="#home">CodeIt-NewsAPI.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-end'>
        <Nav className="mr-auto">status
          <Nav.Link href="#games">Technology</Nav.Link>
          <Nav.Link href="#sports">Sports</Nav.Link>
          <Nav.Link href="#entertainment">Entertainment</Nav.Link>
          <Nav.Link href="#all">All Articles</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </div>
   
  );
};

export default CustomNavbar;

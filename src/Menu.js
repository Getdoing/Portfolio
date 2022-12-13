import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';



const Menu = () => {
    return (
        <div>
            <nav>
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/shop">Shop</NavLink> */}


                <Navbar collapseOnSelect expand="lg" className='color_gr_menu'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <h3 className='text-primary'>Nagesh Talbhandare</h3>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto menu">
                                <a href=""><NavLink to="/" className="links" >Home</NavLink></a>
                                <a href="#"><NavLink to="/about" className=" links" >About</NavLink></a>
                                <a href="#"><NavLink to="/project" className=" links" >Project</NavLink></a>
                                {/* <a href="#"><NavLink to="/resume" className="links " >Resume</NavLink></a> */}
                                <a href="#"><NavLink to="/contact" className="links " >Contact</NavLink></a>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    )
}

export default Menu;




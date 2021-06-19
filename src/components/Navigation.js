import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
// import { Nav.Link } from '@reach/router';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

class Navigation extends Component{

    render(){        
        return (
            <>
              <Navbar fixed="top" variant="light">
                {/* <Navbar.Brand href="#home">Hi there!</Navbar.Brand> */}
                <Nav className="ml-auto mr-4 navigation">
                    <Link className="nav-link" to="/">About</Link>
                    <Link className="nav-link" to="/experience">Experience</Link>
                    <Link className="nav-link" to="/technologies">Technologies</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                </Nav>
                <Dropdown className="dropdown">
                    <Dropdown.Toggle className="toggle-dropdown">
                        <FaBars className="nav-bars" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-item">
                            <Link className="nav-link" to="/">About</Link></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                            <Link className="nav-link" to="/experience">Experience</Link></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                            <Link className="nav-link" to="/technologies">Technologies</Link></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                            <Link className="nav-link" to="/projects">Projects</Link></Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
                {/* <Navbar.Collapse>

                </Navbar.Collapse> */}
                
           </>
        
        )
    } 
}

export default Navigation;
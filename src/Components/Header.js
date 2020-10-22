import React from 'react'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image } from 'react-bootstrap'
import style from './header.module.css'

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                      SS Solutions
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <NavDropdown title="Our Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Graphics Designing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Content Writing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Our Team" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bilal Ahmad</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mussadiq Ali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Irfan Ghafoor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Muhammad Shahbaz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Ghulam Mohayodin</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Nav.Link href="#link">Help</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header

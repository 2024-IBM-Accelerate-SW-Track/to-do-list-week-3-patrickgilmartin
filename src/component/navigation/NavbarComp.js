import React, { Component } from "react";
<<<<<<< HEAD
import {Navbar, Nav, Container} from 'react-bootstrap'
=======
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
} from "react-router-dom"
import About from "../../pages/About";
import Home from "../../pages/Home";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}> Home </Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}
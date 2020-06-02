import React from 'react'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'

const Header = () => {

    return (
        <>
            <Navbar bg="secondary" expand="lg">
                <Navbar.Brand href="#home">Tu Pronóstico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Semanal</Nav.Link>
                        <Nav.Link href="#link">Mensual</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Ingresa una ciudad" className="mr-sm-2" />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
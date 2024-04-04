"use client";

import {Col, Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

export default function NavBar() {

    return (<>
        <Navbar expand="md" fixed="top" className="p-3 mb-3 border-bottom shadow-sm navbar-blur">
            <Container>
                <Navbar.Brand href="#" className="font-weight-normal">
                    <Image src={"/img/logo.svg"} alt="Descrição da Imagem" className="d-block d-md-none" width={200} height="auto" fluid/>
                    <Image src={"/img/logo.svg"} alt="Descrição da Imagem" className="d-none d-md-block" width={280} height="auto" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col md={12} className="mb-3 mb-md-0 d-flex align-items-center justify-content-md-end justify-content-center">
                        <Nav className="ml-md-auto align-items-center">
                            <NavDropdown title="Funcionalidades" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Cardápio Digital</NavDropdown.Item>
                                <NavDropdown.Item href="#">Impressão de Pedidos</NavDropdown.Item>
                                <NavDropdown.Item href="#">QR Code</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mais Funções</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="text-dark">Planos</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Integrações</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Fale Conosco</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Blog</Nav.Link>
                            <Nav.Link href="#" className="btn btn-primary fs-5 px-4 py-3 ml-2 fw-semibold ms-md-3">Iniciar teste grátis &rarr;</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}
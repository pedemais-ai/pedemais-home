"use client";

import {Container, Navbar, Nav, Button, Card, Row, Col} from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Navbar
                bg="light"
                expand="md"
                fixed="top"
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm"
            >
                <Container>
                    <Navbar.Brand href="#" className="font-weight-normal">Company name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#" className="text-dark">Features</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Enterprise</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Support</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Pricing</Nav.Link>
                        </Nav>
                        <Button variant="outline-primary" className="mt-3 mt-md-0">Sign up</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center mt-5">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>

                <Row className="card-deck mb-3 text-center">
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Header>
                                <Card.Title as="h4" className="my-0 font-weight-normal">Free</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title as="h1" className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></Card.Title>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <Button variant="outline-primary" size="lg">Sign up for free</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Header>
                                <Card.Title as="h4" className="my-0 font-weight-normal">Pro</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title as="h1" className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></Card.Title>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <Button variant="primary" size="lg">Get started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Header>
                                <Card.Title as="h4" className="my-0 font-weight-normal">Enterprise</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title as="h1" className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></Card.Title>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <Button variant="primary" size="lg">Contact us</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <Row>
                        <Col xs={12} md={3}>
                            <img className="mb-2" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
                            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Locations</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    );
}

"use client";

import {Container, Navbar, Nav, Button, Card, Row, Col, Form} from "react-bootstrap";

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
                    <Navbar.Brand href="#" className="font-weight-normal">pede.AI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#" className="text-dark">Funcionalidades</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Integrações</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Planos</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Materiais para download</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Blog</Nav.Link>
                        </Nav>
                        <Button variant="primary" className="mt-3 mt-md-0 fs-5 px-4 py-2">Testar grátis por 7 dias</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Row className="mb-5 px-3 py-3 pt-md-5 pb-md-4 mx-auto mt-5">
      {/* First Column */}
      <Col md={6} className="mb-4 mb-md-0 d-flex align-items-center">
  <div>
    <h2 className="display-3">Aumente suas vendas no delivery via WhatsApp</h2>
    <p>
      Mais de 15 mil donos de delivery já descobriram como oferecer um atendimento rápido, prático e lucrativo com a Pede AI, unindo robozinho para WhatsApp, cardápio digital, recuperador de vendas e muito mais.
    </p>
  </div>
</Col>



      {/* Second Column */}
      <Col md={6}>
 <Form className="p-4 shadow" style={{ borderRadius: '8px' }}>
      <h5 className="mb-2">Teste a Pede AI sem pagar nada</h5>
<p className="lead mb-4">Faça o seu cadastro para testar a Pede AI</p>


  <Form.Group controlId="formName" className="mb-3">
    <Form.Control type="text" placeholder="Your Name" className="rounded" style={{ height: '50px' }} />
  </Form.Group>

  <Form.Group controlId="formEmail" className="mb-3">
    <Form.Control type="email" placeholder="Your Email" className="rounded" style={{ height: '50px' }} />
  </Form.Group>

  <Form.Group controlId="formPhone" className="mb-3">
    <Form.Control type="text" placeholder="Your Phone Number" className="rounded" style={{ height: '50px' }} />
  </Form.Group>

  <Form.Group controlId="formDeliveryName" className="mb-3">
    <Form.Control type="text" placeholder="Name of Your Delivery" className="rounded" style={{ height: '50px' }} />
  </Form.Group>

  <Form.Group controlId="formOrders" className="mb-3">
    <Form.Label className="mb-2">Quantidade de pedidos por dia *</Form.Label>
    <div className="d-flex">
      <Form.Check
        type="radio"
        label="Menos do que 10"
        name="formOrders"
        id="ordersLessThan10"
        style={{ marginRight: '1rem' }}
      />
      <Form.Check
        type="radio"
        label="Mais do que 10"
        name="formOrders"
        id="ordersMoreThan10"
      />
    </div>
  </Form.Group>

  <Form.Group controlId="formComputer" className="mb-4">
  <Form.Label className="mb-2">Você possui um computador ou notebook? *</Form.Label>
  <div className="d-flex">
    <Form.Check
      type="radio"
      label="Sim"
      name="formComputer"
      id="computerYes"
      style={{ marginRight: '1rem' }}
    />
    <Form.Check
      type="radio"
      label="Não"
      name="formComputer"
      id="computerNo"
    />
  </div>
</Form.Group>


  <Button variant="primary" type="submit" size="lg" className="w-100 rounded">
  Testar grátis por 7 dias
</Button>

<p className="mb-2 text-muted small">*promoção válida somente para novas contratações</p>

</Form>





      </Col>
    </Row>
    <div className="pricing-header mx-auto text-center mt-5">
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
        <small className="d-block mb-3">Copyright&copy; 2019-2024, pede.AI. Todos os direitos reservados.</small>
    </Col>
    <Col xs={6} md={3}>
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
            <li><a href="#">Cool stuff</a></li>
            <li><a href="#">Random feature</a></li>
            <li><a href="#">Team feature</a></li>
            <li><a href="#">Stuff for developers</a></li>
            <li><a href="#">Another one</a></li>
            <li><a href="#">Last time</a></li>
        </ul>
    </Col>
    <Col xs={6} md={3}>
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
            <li><a href="#">Resource</a></li>
            <li><a href="#">Resource name</a></li>
            <li><a href="#">Another resource</a></li>
            <li><a href="#">Final resource</a></li>
        </ul>
    </Col>
    <Col xs={6} md={3}>
        <h5>Siga</h5>
        <ul className="list-unstyled text-small">
            <li><a href="#">Team</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>
    </Col>
</Row>

                </footer>
            </Container>
        </>
    );
}

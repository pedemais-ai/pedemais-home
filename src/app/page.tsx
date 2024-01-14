// page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col, Form, ButtonGroup, Image, NavDropdown } from 'react-bootstrap';

const WordAnimation: React.FC = () => {
   const [word, setWord] = useState('');
   const [wordIndex, setWordIndex] = useState(0);
 
   useEffect(() => {
     const targetWords = ['Pede.AI', 'WhatsApp'];
     const currentWord = targetWords[wordIndex];
     const wordArray = currentWord.split('');
     let displayedWord = '';
     let charIndex = 0;
 
     const interval = setInterval(() => {
       displayedWord += wordArray[charIndex];
       setWord(displayedWord);
 
       charIndex += 1;
 
       if (charIndex === wordArray.length) {
         clearInterval(interval);
 
         // Aguardar 1500 milissegundos (1.5 segundos) após a palavra ser totalmente escrita
         setTimeout(() => {
           // Se já completamos um ciclo, interromper a animação
           if (wordIndex === targetWords.length - 1) {
             // Lógica para interromper a animação, se necessário
             return;
           }
 
           // Trocar para a próxima palavra após o intervalo
           setWordIndex((prevIndex) => prevIndex + 1);
         }, 1500);
       }
     }, 150); // Intervalo menor para uma escrita mais lenta
 
     return () => clearInterval(interval);
   }, [wordIndex]);
 
   return <h1 className="display-3 custom-bold mb-4">Venda Mais no #delivery com o Poder do<br /> {word}!</h1>;
 };
 

const Home = () => {
  return (
    <>
    <Navbar bg="light" expand="md" fixed="top" className="p-3 mb-3 border-bottom shadow-sm" style={{ backgroundColor: 'white' }}>
      <Container>
        <Navbar.Brand href="#" className="font-weight-normal">Pede.AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col md={8} className="mb-3 mb-md-0 d-flex align-items-center">
            <Nav className="ml-md-auto">
            <NavDropdown title="Funcionalidades" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Cardápio Digital</NavDropdown.Item>
                <NavDropdown.Item href="#">Impressão de Pedidos</NavDropdown.Item>
                <NavDropdown.Item href="#">Mais Funções</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="text-dark">Integrações</Nav.Link>
              <Nav.Link href="#" className="text-dark">Planos</Nav.Link>
              <Nav.Link href="#" className="text-dark">Materiais para download</Nav.Link>
              <Nav.Link href="#" className="text-dark">Blog</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-md-right">
            <Button variant="primary" className="mt-3 mt-md-0 fs-5 px-4 py-2 w-100" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', border: '1px solid lightgray' }}>Testar grátis por 7 dias</Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Container>
         <Row className="mb-5 py-3 pt-md-5 pb-md-4 mx-auto" style={{ marginTop: '4rem' }}> {/* First Column */}
            <Col md={6} className="mb-4 mb-md-0 d-flex align-items-center pe-3">
            <div>
            <WordAnimation />
  <p style={{ fontSize: '1rem' }}>Milhares de empresários do setor de delivery já experimentaram a eficiência da Pede AI, integrando assistente virtual para WhatsApp, cardápio digital, recuperação de vendas e diversas outras funcionalidades que tornam seu negócio mais lucrativo.</p>
</div>




            </Col> {/* Second Column */}
            <Col md={6}>
               <Form className="p-4" style={{ borderRadius: '8px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border: '1px solid #ccc' }}>
                  <h5 className="mb-2">Teste a Pede AI sem pagar nada</h5>
                  <p className="lead mb-4">Faça o seu cadastro para testar a Pede AI</p>
                  <Form.Group controlId="formName" className="mb-3">
                     <Form.Control type="text" placeholder="Seu Nome" className="rounded" style={{ height: '50px' }} />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                     <Form.Control type="email" placeholder="Seu E-mail" className="rounded" style={{ height: '50px' }} />
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="mb-3">
                     <Form.Control type="text" placeholder="Seu Número de Telefone" className="rounded" style={{ height: '50px' }} />
                  </Form.Group>
                  <Form.Group controlId="formDeliveryName" className="mb-3">
                     <Form.Control type="text" placeholder="Nome do Seu Delivery" className="rounded" style={{ height: '50px' }} />
                  </Form.Group>
                  <Form.Group controlId="formOrders" className="mb-3">
                     <Form.Label className="mb-2">Quantidade de pedidos por dia *</Form.Label>
                     <div className="d-flex">
                        <Form.Check type="radio" label="Menos do que 10" name="formOrders" id="ordersLessThan10" style={{ marginRight: '1rem' }} />
                        <Form.Check type="radio" label="Mais do que 10" name="formOrders" id="ordersMoreThan10" />
                     </div>
                  </Form.Group>
                  <Form.Group controlId="formComputer" className="mb-4">
                     <Form.Label className="mb-2">Você possui um computador ou notebook? *</Form.Label>
                     <div className="d-flex">
                        <Form.Check type="radio" label="Sim" name="formComputer" id="computerYes" style={{ marginRight: '1rem' }} />
                        <Form.Check type="radio" label="Não" name="formComputer" id="computerNo" />
                     </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg" className="w-100 rounded"> Testar grátis por 7 dias </Button>
                  <p className="mb-2 text-muted small">*promoção válida somente para novas contratações</p>
               </Form>
            </Col>
         </Row>
         </Container>

         <Row className="mt-5 mb-5 p-5" style={{ backgroundColor: '#e0f7fa' }}>
  <Container>
    <Row>
      <Col md={8}>
        <h3 style={{ fontSize: '2.5rem' }}>Você já se sentiu frustrado com o atendimento pelo WhatsApp?</h3>
        <p>Demoras nas respostas, anotações equivocadas de pedidos e inconsistências no atendimento são desafios comuns para serviços de delivery em expansão. Para continuar ampliando seu negócio em 2024, é essencial fortalecer a eficiência do atendimento do seu delivery por meio do WhatsApp.</p>
        <Button
      variant="primary"
      className="shadow-lg text-white"
      style={{
        fontSize: '1.5rem',
        padding: '15px 20px',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Adiciona um efeito de brilho
      }}
    >
      Testar grátis por 7 dias
    </Button>
      </Col>
      <Col md={4} className="mt-md-0 mt-4">
      <Image src="/help-desk-women.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
      </Col>
    </Row>
  </Container>
</Row>
         
         <Container>
         <div className="pricing-header mx-auto text-center mt-5">
            <h1 className="display-4">Planos</h1>
            <p className="lead">Suba ao próximo nível. Oferecemos soluções completas com integração ao WhatsApp. Com preços competitivos, garantimos qualidade e resultados excepcionais. Invista no sucesso do seu negócio agora!</p>
         </div>

         <div className="d-flex justify-content-center">
        <ButtonGroup>
          <Button variant="secondary" size="lg" className="mr-2 bg-white text-dark hover:bg-primary">Mensal</Button>
          <Button variant="secondary" size="lg" className="active mr-2 bg-success text-white">Semestral</Button>
          <Button variant="secondary" size="lg" className="bg-white text-dark hover:bg-primary">Anual</Button>
        </ButtonGroup>
      </div>

         <Row className="card-deck mb-3 text-center mt-5">
            <Col md={4}>
               <Card className="mb-4 shadow-sm">
                  <Card.Header>
                     <Card.Title as="h4" className="my-0 font-weight-normal">Essencial</Card.Title>
                  </Card.Header>
                  <Card.Body>
  <p className="mb-1">
    <strong className="h2 font-weight-bold">R$99,99</strong> <small style={{ fontSize: '0.8em' }} className="text-muted">em 6x</small>
  </p>

  <ul className="list-unstyled mt-3 mb-4">
    <li>Para atender às necessidades de pequenos restaurantes e startups, o Plano Essencial oferece integração com WhatsApp e cardápio digital.</li>
  </ul>
  
  <Button variant="outline-primary" size="lg">Testar grátis</Button>
</Card.Body>



               </Card>
            </Col>
            <Col md={4}>
               <Card className="mb-4 shadow-sm">
                  <Card.Header>
                     <Card.Title as="h4" className="my-0 font-weight-normal">Avançado</Card.Title>
                  </Card.Header>
                  <Card.Body>
  <p className="mb-1">
    <strong className="h2 font-weight-bold">R$149,99</strong> <small style={{ fontSize: '0.8em' }} className="text-muted">em 6x</small>
  </p>

  <ul className="list-unstyled mt-3 mb-4">
    <li>Para restaurantes em crescimento, inclui integração com WhatsApp e cardápio digital, além de funcionalidades avançadas.</li>
  </ul>
  
  <Button variant="primary" size="lg">Testar grátis</Button>
</Card.Body>
               </Card>
            </Col>
            <Col md={4}>
               <Card className="mb-4 shadow-sm">
                  <Card.Header>
                     <Card.Title as="h4" className="my-0 font-weight-normal">Premium</Card.Title>
                  </Card.Header>
                  <Card.Body>
  <p className="mb-1">
    <strong className="h2 font-weight-bold">R$199,99</strong> <small style={{ fontSize: '0.8em' }} className="text-muted">em 6x</small>
  </p>

  <ul className="list-unstyled mt-3 mb-4">
    <li>Projetado para grandes cadeias de restaurantes, oferece integração com WhatsApp e cardápio digital, personalização avançada e suporte 24/7.</li>
  </ul>
  
  <Button variant="outline-primary" size="lg">Testar grátis</Button>
</Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>

      <Row className="mt-5 mb-5 p-5" style={{ backgroundColor: 'rgb(14 205 116)' }}>
      <Container>
      <Row>
        <Col md={8} className="text-white">
          <h3 className="text-white"  style={{ fontSize: '2.5rem' }}>Teste grátis e confirme os resultados.</h3>
          <p>Descubra o motivo pelo qual milhares de clientes migraram para o sistema Pede AI. Realize um teste gratuito de sete dias e experimente os resultados em primeira mão.</p>
          <Button
      variant="primary"
      className="shadow-lg text-white"
      style={{
        fontSize: '1.5rem',
        padding: '15px 20px',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Adiciona um efeito de brilho
      }}
    >
      Testar grátis por 7 dias
    </Button>
        </Col>
        <Col md={4} className="mt-md-0 mt-4">
          <Image src="/happy-testfree.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
        </Col>
      </Row>
    </Container>
</Row>


      <Container>
         <footer className="pt-4 my-md-5 pt-md-5 border-top">
         <Row>
      <Col xs={12} md={3}>
        Pede.AI <small className="d-block mb-3">Copyright&copy; 2019-2024, pede.AI. Todos os direitos reservados.</small>
      </Col>
      <Col xs={6} md={3}>
        <h5>Recursos Principais</h5>
        <ul className="list-unstyled text-small">
          <li><a href="#">Plano Básico</a></li>
          <li><a href="#">Plano Avançado</a></li>
          <li><a href="#">Plano Premium</a></li>
          <li><a href="#">Personalização</a></li>
          <li><a href="#">Suporte 24/7</a></li>
        </ul>
      </Col>
      <Col xs={6} md={3}>
        <h5>Recursos Adicionais</h5>
        <ul className="list-unstyled text-small">
          <li><a href="#">Integrações</a></li>
          <li><a href="#">Relatórios</a></li>
          <li><a href="#">Treinamento</a></li>
          <li><a href="#">Atualizações</a></li>
        </ul>
      </Col>
      <Col xs={6} md={3}>
        <h5>Sobre Nós</h5>
        <ul className="list-unstyled text-small">
          <li><a href="#">Nossa Equipe</a></li>
          <li><a href="#">Localizações</a></li>
          <li><a href="#">Política de Privacidade</a></li>
        </ul>
      </Col>
    </Row>
         </footer>
      </Container>
   </> );
}

export default Home;
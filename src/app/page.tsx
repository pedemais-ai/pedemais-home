// page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col, Form, ButtonGroup, Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faClipboard, faHamburger } from '@fortawesome/free-solid-svg-icons';

const WordAnimation: React.FC = () => {
   const [word, setWord] = useState('');
   const [wordIndex, setWordIndex] = useState(0);

   useEffect(() => {
      const targetWords = ['Pedemais.AI', 'WhatsApp'];
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

   return <h1 className="display-3 custom-bold mb-4 text-white">Venda Mais no <br/><span className="text-yellow">#delivery</span> com <br/>o Poder do <span className="text-yellow">{word}!</span></h1>;
};


const Home = () => {
   return (
      <>
         <Navbar bg="light" expand="md" fixed="top" className="p-3 mb-3 border-bottom shadow-sm" style={{ backgroundColor: 'white' }}>
            <Container>
            <Navbar.Brand href="#" className="font-weight-normal">
    <Image src="img/logo.png" alt="Descrição da Imagem" className="d-block d-md-none" width="200px" height="auto" fluid /> {/* Para dispositivos móveis */}
    <Image src="img/logo.png" alt="Descrição da Imagem" className="d-none d-md-block" width="303px" height="59px" fluid /> {/* Para outras resoluções */}
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />

               <Navbar.Collapse id="responsive-navbar-nav">
                  <Col md={12} className="mb-3 mb-md-0 d-flex align-items-center justify-content-md-end justify-content-center"> {/* Adicionando a classe justify-content-center para centralizar */}
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
                           <Nav.Link href="#" className="btn btn-primary fs-5 px-4 py-3 ml-2 ms-md-3">Iniciar teste grátis &rarr;</Nav.Link>
                     </Nav>
                  </Col>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Container className="bg-header p-md-5" fluid>
         <Image src="/img/robo-apontando-small.png" alt="Robô apontando" width="fluid" height="fluid" />
            <Row className="mb-5 py-3 pt-md-5 pb-md-4 mx-auto" style={{ marginTop: '4rem' }}> {/* First Column */}
               <Col md={7} className="ps-md-5 mb-4 mb-md-0 d-flex align-items-center pe-3">
                  <div>
                     <WordAnimation />
                     <h3 className="text-white pb-md-5">Aumente suas vendas com uma<br/>plataforma simples e prática para seus clientes.</h3>
                     <Button className="p-3" variant="primary" size="lg">Iniciar teste grátis &rarr;</Button>
                     <Button className="ms-md-3 p-3" variant="outline-primary" size="lg">Fale com um consultor &rarr;</Button>
                  </div>
               </Col> {/* Second Column */}
               <Col md={5}>
                  <Form className="p-4 bg-white" style={{ borderRadius: '8px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border: '1px solid #ccc' }}>
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

        
            <Container className="" fluid>
               <Container>
               <Row>
                  <Col md={5} className="pe-md-5">
                     <h1>
                        <span className="text-yellow">Seus clientes<br/>pedem pelo WhatsApp,<br/></span>
                        <span className="text-darkred">sem intermediários</span>
                     </h1>
                     <h3>Maximize suas margens de lucro</h3>
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
                  <Col md={7} className="mt-md-0 mt-4">
                     <Image src="/img/pedido-whatsapp.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
               </Row>
               </Container>
            </Container>
        

         <Container className="mt-5">
            <h1 className="display-4 text-center">Como funciona o #delivery</h1>
            <Row className="text-center">
               <Col md={4}>
                  <div className="bg-light-blue p-4 rounded mt-3 mt-md-5">
                     <FontAwesomeIcon icon={faRobot} size="3x" className="mb-3" style={{ color: '#007BFF' }} />
                     <h5 className="mb-3" style={{ color: '#007BFF', fontSize: '1.25rem' }}>1. Atendimento WhatsApp</h5>
                     <p>Quando o cliente chega até seu WhatsApp querendo fazer um pedido o link do seu cardápio digital é enviado. O robô também pode ajudar a solucionar problemas, mas prontamente acionará um humano por meio de aviso no seu dashboard se necessário.</p>
                  </div>
               </Col>
               <Col md={4}>
                  <div className="bg-light-blue p-4 rounded mt-3 mt-md-5">
                     <FontAwesomeIcon icon={faClipboard} size="3x" className="mb-3" style={{ color: '#007BFF' }} />
                     <h5 className="mb-3" style={{ color: '#007BFF', fontSize: '1.25rem' }}>2. Pedido no Cardápio Digital</h5>
                     <p>O cardápio digital está otimizado para converter a venda sem o cliente precisar se cadastrar e consegue se comunicar com o WhatsApp do cliente. <i>(Ex: pedido efetuado, estorno pix, etc)</i></p>
                  </div>
               </Col>
               <Col md={4}>
                  <div className="bg-light-blue p-4 rounded mt-3 mt-md-5">
                     <FontAwesomeIcon icon={faHamburger} size="3x" className="mb-3" style={{ color: '#007BFF' }} />
                     <h5 className="mb-3" style={{ color: '#007BFF', fontSize: '1.25rem' }}>3. Gerenciamento de Pedidos</h5>
                     <p>O pedido realizado é enviado para sua tela de gestão totalmente intuitiva e o sistema notifica o cliente pelo WhatsApp sobre o andamento do pedido. <br /><i>(Ex: pedido em preparaçao, saiu pra entrega, etc)</i></p>
                  </div>
               </Col>
            </Row>
         </Container>

         <Container className="mt-5 bg-light" fluid>
            <Container>
               <Row>
                  <Col md={5}>
                     <Image src="/oglobo-noticia.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
                  <Col md={7} className="mt-md-0 mt-4 ps-md-5">

                     <h3 style={{ fontSize: '2.5rem' }}>Robôs vs. Humanos</h3>
                     <p style={{ fontSize: '1.2rem' }}>Em certos casos, a intervenção humana é necessária. <strong>Receba alertas imediatos em sua tela indicando quando um cliente precisar de ajuda além da capacidade do robô,</strong> se destacando dos concorrentes que deixam os clientes à mercê de respostas automáticas apenas. Essa abordagem não só evita frustrações, mas também diferencia seu negócio, mostrando um compromisso real com a experiência e satisfação do cliente.</p>

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
               </Row>

            </Container>
         </Container>

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

         <Container className="" fluid style={{ backgroundColor: 'rgb(14 205 116)' }}>
            <Container>
               <Row>
                  <Col md={8} className="text-white">
                     <h3 className="text-white" style={{ fontSize: '2.5rem' }}>
                        Experimente por 7 dias e veja os resultados
                     </h3>
                     <p style={{ fontSize: '1.2rem' }}>Descubra o motivo pelo qual milhares de clientes migraram para o sistema Pede AI. Realize um teste gratuito de sete dias e experimente os resultados em primeira mão.</p>
                     <Button
                        variant="primary"
                        className="shadow-lg text-white w-75"
                        style={{
                           fontSize: '1.5rem',
                           padding: '15px 5px', // Ajuste o tamanho horizontal do botão aqui
                           marginTop: '20px', // Ajuste a margem superior conforme necessário
                        }}
                     >
                        Iniciar teste grátis
                     </Button>
                  </Col>

                  <Col md={4} className="mt-md-0 mt-4">
                     <Image src="/happy-testfree.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
               </Row>
            </Container>
         </Container>


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
      </>);
}

export default Home;
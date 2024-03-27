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

   return <h1 className="display-3 custom-bold mb-4 text-white">Venda Mais no <br /><span className="text-yellow">#delivery</span> com <br />o Poder do <span className="text-yellow">{word}!</span></h1>;
};


const Home = () => {
   return (
      <>
         <Navbar expand="md" fixed="top" className="p-3 mb-3 border-bottom shadow-sm navbar-blur">
            <Container>
               <Navbar.Brand href="#" className="font-weight-normal">
                  <Image src="img/logo.svg" alt="Descrição da Imagem" className="d-block d-md-none" width="200px" height="auto" fluid /> {/* Para dispositivos móveis */}
                  <Image src="img/logo.svg" alt="Descrição da Imagem" className="d-none d-md-block" width="280px" height="auto" fluid /> {/* Para outras resoluções */}
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
                        <Nav.Link href="#" className="btn btn-primary fs-5 px-4 py-3 ml-2 fw-semibold ms-md-3">Iniciar teste grátis &rarr;</Nav.Link>
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
                     <h3 className="text-white pb-md-5">Aumente suas vendas com uma<br />plataforma simples e prática para seus clientes.</h3>
                     <Button className="p-3" variant="primary" size="lg">Iniciar teste grátis &rarr;</Button><br />
                     <Button className=" mt-3 p-3" variant="outline-primary" size="lg">Fale com um consultor &rarr;</Button>
                  </div>
               </Col> {/* Second Column */}
               <Col md={5}>
                  <Form className="p-4 bg-white" style={{ borderRadius: '8px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border: '1px solid #ccc' }}>
                     <h5 className="mb-2 text-red custom-bold">Teste a PedeMais.Ai sem pagar nada</h5>
                     <p className="lead mb-4">Faça o seu cadastro rapidinho ai</p>
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

         <Container className="pt-5 mt-5 pb-5" fluid>
            <Container>
               <Row>
                  <Col lg={6} md={4}>
                     <Image src="/img/phone.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
                  <Col lg={6} md={8} className="mt-md-0 mt-4 ps-md-5">
                     <div className="mt-md-5">
                        <h1 className="mb-4">
                           <span className="text-darkred custom-bold">Acabe com os prejuízos por demora no atendimento</span>
                        </h1>
                        <p>Utilize a automação do WhatsApp, impulsionada pela nossa IA, para responder a perguntas frequentes, facilitando aos clientes a realização de pedidos e garantindo uma experiência excepcional!</p>

                        <Row className="mt-2">
                           <Col md={12}>
                              <div className="d-flex align-items-center mt-3 mb-4">
                                 <div className="rounded-circle bg-yellow p-4 mr-3 me-4">
                                    <span className="text-white">😍</span> {/* Coloque o texto desejado dentro do círculo */}
                                 </div>
                                 <div>

                                    <span style={{ fontWeight: 300 }}>Utilize os dados do histórico de pedidos dos clientes para reengajá-los pelo WhatsApp, com sugestões inteligentes e personalizadas.</span>
                                 </div>
                              </div>
                           </Col>
                           <Col md={12}>
                              <div className="d-flex align-items-center mb-4 ">
                                 <div className="rounded-circle bg-yellow p-4 mr-3 me-4">
                                    <span className="text-white">😍</span> {/* Coloque o texto desejado dentro do círculo */}
                                 </div>
                                 <div>

                                    <span style={{ fontWeight: 300 }}>Envie campanhas no WhatsApp para promover recompras de produtos ou pratos favoritos, oferecendo descontos especiais, tudo isso impulsionado pela nossa Inteligência Artificial de última geração.</span>
                                 </div>
                              </div>
                           </Col>
                           <Col md={12}>
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle bg-yellow p-4 mr-3 me-4">
                                    <span className="text-white">😍</span> {/* Coloque o texto desejado dentro do círculo */}
                                 </div>
                                 <div>

                                    <span style={{ fontWeight: 300 }}>Aumente a eficiência do atendimento ao cliente com respostas rápidas e precisas graças à nossa Inteligência Artificial.</span>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
            </Container>
         </Container>

         <Container className="bg-comofunciona border-bottom pb-lg-5" fluid>
            <div className="d-flex justify-content-center align-items-center">
               <div className="shadow impulsione p-5 mt-5 bg-white">
                  <Row>
                     <Col lg={8} className="ps-lg-5">
                        <div className="impulsione-col1">
                           <div className="pb-5">
                              <h1 className="text-darkred bg-white display-5 custom-bold">Impulsione suas vendas!</h1>
                           </div>
                           <Row>
                              <Col lg={4}>
                                 <h1 className="text-yellow display-3 custom-bold">10x</h1>
                                 <h4>Atendimento 10x <br className="d-none d-xl-block"></br>
                                    mais  rápido</h4>
                              </Col>
                              <Col lg={4}>
                                 <h1 className="text-yellow display-3 custom-bold">60%</h1>
                                 <h4>Incremento de até 60%
                                    nos pedidos</h4>
                              </Col>
                              <Col lg={4}>
                                 <h1 className="text-yellow display-3 custom-bold">99%</h1>
                                 <h4>de respostas garantidas</h4>
                              </Col>
                           </Row>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <Image className="ms-lg-5" src="img/robo.png" alt="Descrição da Imagem" width="250px" height="auto" fluid />
                     </Col>
                  </Row>
               </div>
            </div>

            <Container className="pt-5 mt-5">
               <h1 className="text-center custom-bold display-4"><span className="text-darkred">Como funciona o modo<br className="d-none d-xl-block"></br></span> <span className="text-yellow">#delivery</span></h1>
               <Row className="text-center">
                  <Col md={4}>
                     <div className="p-4 rounded mt-3 mt-md-5">
                        <Image className="pb-4" src="img/comofunciona-atendimento.png" alt="Descrição da Imagem" width="300px" height="auto" fluid />
                        <Row>
                           <Col className="text-end" md={3} xs={1}>
                              <h5 className="mb-3 custom-bold h4 text-black"><span className="text-yellow h2 fw-semibold">01</span></h5>
                           </Col>
                           <Col className="text-start" md={9} xs={11}>
                              <h5 className="mb-3 custom-bold h4 text-black">Cardápio digital</h5>
                              <p>Quando o cliente chega até seu WhatsApp querendo fazer um pedido o link do seu cardápio digital é enviado. O robô também pode ajudar a solucionar problemas, mas prontamente acionará um humano por meio de aviso no seu dashboard se necessário.</p>
                           </Col>
                        </Row>
                     </div>
                  </Col>
                  <Col md={4}>
                     <div className="p-4 rounded mt-3 mt-md-5">
                        <Image className="pb-4" src="img/comofunciona-cardapio.png" alt="Descrição da Imagem" width="300px" height="auto" fluid />
                        <Row>
                           <Col className="text-end" md={3} xs={1}>
                              <h5 className="mb-3 custom-bold h4 text-black"><span className="text-yellow h2 fw-semibold">02</span></h5>
                           </Col>
                           <Col className="text-start" md={9} xs={11}>
                              <h5 className="mb-3 custom-bold h4 text-black">Cardápio digital</h5>
                              <p>O cardápio digital está otimizado para converter a venda sem o cliente precisar se cadastrar e consegue se comunicar com o WhatsApp do cliente. <i>(Ex: pedido efetuado, estorno pix, etc)</i></p>
                           </Col>
                        </Row>
                     </div>
                  </Col>
                  <Col md={4}>
                     <div className="p-4 rounded mt-3 mt-md-5">
                        <Image className="pb-4" src="img/comofunciona-gerenciamento.png" alt="Descrição da Imagem" width="300px" height="auto" fluid />
                        <Row>
                           <Col className="text-end" md={3} xs={1}>
                              <h5 className="mb-3 custom-bold h4 text-black"><span className="text-yellow h2 fw-semibold">03</span></h5>
                           </Col>
                           <Col className="text-start" md={9} xs={11}>
                              <h5 className="mb-3 custom-bold h4 text-black">Gerenciamento</h5>
                              <p>O pedido realizado é enviado para sua tela de gestão totalmente intuitiva e o sistema notifica o cliente pelo WhatsApp sobre o andamento do pedido. <br /><i>(Ex: pedido em preparaçao, saiu pra entrega, etc)</i></p>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
            </Container>

            <div className="comofunciona-botoes text-center mb-5 mb-md-0">
               <Button className="m-2 p-3" variant="primary" size="lg">Iniciar teste grátis &rarr;</Button>
               <Button className="m-2 ms-md-3 p-3 bg-white" variant="outline-secondary" size="lg">Fale com um consultor &rarr;</Button>
            </div>
         </Container>

         <Container className="pt-5 mt-5" fluid>
            <Container>
               <Row>
                  <Col lg={5} className="d-flex align-items-center pe-md-5">
                     <div>
                        <h1 className="custom-bold">
                           <span className="text-yellow">Seus clientes<br />pedem pelo WhatsApp,<br /></span>
                           <span className="text-darkred">sem intermediários</span>
                        </h1>
                        <Row>
                           <Col md={12}>
                              <div className="d-flex align-items-center mt-3 mb-4">
                                 <div className="rounded-circle bg-yellow mr-3 me-4">
                                    <Image src="img/svg-vantagens/ICON-1-VANTAGENS.svg" width="90px" height="auto" alt="Descrição da Imagem" />
                                 </div>
                                 <div>
                                    <h5 className="custom-bold">Maximize suas margens de lucro</h5>
                                    <span style={{ fontWeight: 300 }}>Economize no pagamento das taxas de aplicativos de delivery, tendo o seu próprio canal de entregas.</span>
                                 </div>
                              </div>
                           </Col>
                           <Col md={12}>
                              <div className="d-flex align-items-center mb-4">
                                 <div className="rounded-circle bg-yellow mr-3 me-4">
                                    <Image src="img/svg-vantagens/ICON-2-VANTAGENS.svg" width="90px" height="auto" alt="Descrição da Imagem" />
                                 </div>
                                 <div>
                                    <h5 className="custom-bold">Aumente a fidelidade ao seu negócio</h5>
                                    <span style={{ fontWeight: 300 }}>Utilize os descontos e seu programa de fidelização para fidelizar seus clientes.</span>
                                 </div>
                              </div>
                           </Col>
                           <Col md={12}>
                              <div className="d-flex align-items-center">
                                 <div className="rounded-circle bg-yellow mr-3 me-4">
                                    <Image src="img/svg-vantagens/ICON-3-VANTAGENS.svg" width="90px" height="auto" alt="Descrição da Imagem" />
                                 </div>
                                 <div>
                                    <h5 className="custom-bold">Ganhe tempo em cada pedido</h5>
                                    <span style={{ fontWeight: 300 }}>Receba os seus pedidos sem demorar em atendimentos prolongados.</span>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Col>
                  <Col lg={7} className="mt-md-0 mt-4 d-flex justify-content-center align-items-center">
                     <Image src="/img/pedido-whatsapp.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
               </Row>
            </Container>
         </Container>


         <Container className="bg-tipo" fluid>
            <Container className="pt-5 mt-5">
               <Row>
                  <Col md={4}>
                     <Image className="d-none d-md-block" src="/img/phone.png" alt="Descrição da Imagem" width="100%" height="100%" fluid />
                  </Col>
                  <Col md={8} className="mt-md-0 mt-md-4 ps-md-5">

                     <div className="mt-md-5 pt-md-5 pt-3">
                        <Col xs={12} md={10}>
                           <Image className="logo-pen" src="/img/logo-pen.png" alt="Descrição da Imagem" width="100px" height="100%" fluid />
                           <div className="pt-md-5">
                              <h1 className="mb-4">
                                 <span className="text-darkred custom-bold">Tipos de negócio que atendemos</span>
                              </h1>
                              <p>Somos especialistas em tornar a vida mais fácil para os negócios! Com a PedeMais.Ai facilitamos o atendimento ao cliente e agilizamos suas operações, sem complicações. E não importa se você tem uma hamburgueria, uma pizzaria ou uma sorveteria, nós estamos aqui para te ajudar a crescer!</p>
                           </div>
                        </Col>
                        <Row className="text-darkred">
                           <Col xs={6} xl={4}>
                              <ul className="list-unstyled text-small">
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/hamb.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Hamburgueria</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/PitDog.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Fast Food</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/fast.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Hot Dog</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center">
                                       <Image src="img/svg-restaurantes/acai.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Açaí</span>
                                    </div>
                                 </li>
                              </ul>
                           </Col>
                           <Col xs={6} xl={4}>
                              <ul className="list-unstyled text-small">
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/rest.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Restaurante</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/pizza.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Pizzaria</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/cerva.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Cervejaria</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center">
                                       <Image src="img/svg-restaurantes/pub.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Pub</span>
                                    </div>
                                 </li>
                              </ul>
                           </Col>
                           <Col xs={12} xl={4}>
                              <ul className="list-unstyled text-small d-none d-xl-block">
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/sorb.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Sorveteria</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/bolos.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Casa de bolos</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center mb-3">
                                       <Image src="img/svg-restaurantes/churrasco.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Churrascaria</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="d-flex align-items-center">
                                       <Image src="img/svg-restaurantes/frutos-mar.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">E muito mais</span>
                                    </div>
                                 </li>
                              </ul>
                              <ul className="list-unstyled text-small d-xl-none">
                                 <Row>
                                    <Col xs={6}>
                                       <li>
                                          <div className="d-flex align-items-center mb-3">
                                             <Image src="img/svg-restaurantes/sorb.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Sorveteria</span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="d-flex align-items-center mb-3">
                                             <Image src="img/svg-restaurantes/bolos.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Casa de bolos</span>
                                          </div>
                                       </li>
                                    </Col>
                                    <Col xs={6}>
                                       <li>
                                          <div className="d-flex align-items-center mb-3">
                                             <Image src="img/svg-restaurantes/churrasco.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">Churrascaria</span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="d-flex align-items-center">
                                             <Image src="img/svg-restaurantes/frutos-mar.svg" alt="Descrição da Imagem" width="55px" height="auto" fluid /> <span className="ps-md-2 fs-5">E muito mais</span>
                                          </div>
                                       </li>
                                    </Col>
                                 </Row>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
            </Container>
         </Container>

         <Container className="pb-5 container-experimente">
            <div className="d-flex justify-content-center align-items-center">
               <div className="experimente p-5 mt-5">
                  <Row>
                     <Col lg={7} className="ps-lg-5">
                        <div className="pb-4">
                           <div className="pb-5">
                              <h1 className="text-white display-5 custom-bold">Experimente por 7 dias<br className="d-none d-xl-block"></br>e veja os resultados!</h1>
                           </div>
                           <h4>Descubra o motivo pelo qual milhares de clientes migraram para o sistema <span className="fw-semibold">PedeMais.Ai</span>. Realize um teste gratuito
                              de sete dias e experimente os resultados em primeira mão.</h4>
                        </div>
                        <Button className="p-3 bg-black text-white" variant="primary" size="lg">Iniciar teste grátis &rarr;</Button>
                        <Button className="ms-md-3 p-3 bg-white" variant="outline-secondary" size="lg">Fale com um consultor &rarr;</Button>
                     </Col>
                     <Col lg={5}>
                        <Image className="ms-lg-5" src="img/frame.png" alt="Descrição da Imagem" width="624px" height="412px" fluid />
                     </Col>
                  </Row>
               </div>
            </div>
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
                        <Button variant="outline-secondary w-100" size="lg">Iniciar teste grátis</Button>
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

                        <Button variant="primary w-100" size="lg">Iniciar teste grátis</Button>
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

                        <Button variant="outline-secondary w-100" size="lg">Iniciar teste grátis</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>




         <Container className="bg-bottom" fluid>
            <Container>
               <footer className="pt-4 my-3 pt-5">
                  <Row className="border-bottom">
                     <Col xs={12} md={3}>
                        <Image src="img/logo.svg" alt="Descrição da Imagem" width="300px" height="auto" fluid />
                     </Col>
                     <Col xs={6} md={3}>
                        <ul className="list-unstyled text-small">
                           <li><a href="#">Funcionalidades</a></li>
                           <li><a href="#">Planos</a></li>
                           <li><a href="#">F.A.Q.</a></li>
                        </ul>
                     </Col>
                     <Col xs={6} md={3}>
                        <ul className="list-unstyled text-small">
                           <li><a href="#">Fale Conosco</a></li>
                           <li><a href="#">Política de privacidade</a></li>
                           <li><a href="#">Fale com um consultor</a></li>
                        </ul>
                     </Col>
                  </Row>
               </footer>
               <small className="d-block mb-3 font-weight-light">PedeMais.Ai<br />Copyright&copy; 2019-2024. Todos os direitos reservados.</small>
            </Container>
         </Container>
      </>);
}

export default Home;
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Nav,  Navbar, NavDropdown, Card} from "react-bootstrap"
import Login from './Login';
import Register from './Register';
import Recuperar from './Recuperar';
import PreRegistro from './PreRegistro';
import './Style.css';
import ListarJugador from './ListarJugador';
import ListarJuez from './ListarJuez';
import EditarJuez from "./EditarJuez";
import EditarJugador from "./EditarJugador";
import balonNaranja from "../img/balonNaranja.png";

function Home() {
return (
    <div className="">
       
        <header>
              <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                  <>
                    <Navbar.Brand  href="#home"><span><img className="logo" src={balonNaranja} alt="nice"/></span>MAXI-BASKET</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as = {Link} to ={""} >Categorias</Nav.Link>
                        <Nav.Link href="#pricing">Partido</Nav.Link>
                        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">35+</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">45+</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">55+</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Femenino</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Nav>
                        <Nav.Link eventKey={1} as = {Link} to ={"register"}>Registrarse</Nav.Link>
                        <Nav.Link eventKey={2} as = {Link} to ={"login"}>Login</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </>
                </Navbar>
        </header>
    
        <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="preregistro" element={<PreRegistro />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recuperar" element={<Recuperar />} />
        <Route path="listar-jugador" element={<ListarJugador />} />
        <Route path="listar-juez" element={<ListarJuez />} />
        <Route path='/editar-juez/:id' element={ <EditarJuez/> } />
        <Route path='/editar-jugador/:id' element={ <EditarJugador/> } />
        </Routes>


       <div className="container">
            <div className="jojo" >
                <div className="cuerpo">
                </div>
                <div className="cuerpo1">
                </div>
            </div>
            <div>
          

             <footer className="pie-pagina" expand="lg">
            
            
            <Card className="text-center bg-dark text-white">          
              <Card.Body>
                <Card.Title><small>&copy; 2022 <b>SAS</b> - Todos los Derechos Reservados.</small></Card.Title>                        
              </Card.Body>
              
            </Card>
          
        </footer>
            </div>
        </div>
    </div>
);
}

export default Home;
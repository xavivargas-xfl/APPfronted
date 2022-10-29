import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Nav,  Navbar, NavDropdown, Button, Card} from "react-bootstrap"
import Formjuez from './Formjuez';
import Formjugador from './Formjugador';
import AuthUser from './AuthUser';
import ValidarRegistro from './ValidarRegistro';
import ListarJugador from './ListarJugador';
import ListarJuez from './ListarJuez';
import EditarJuez from "./EditarJuez";
import EditarJugador from "./EditarJugador";
import FormDelegado from './FormDelegado';
import ListarDelegado from './ListarDelegado';
import EditarDelegado from './EditarDelegado';
import balonNaranja from "../img/balonNaranja.png";

function Usuario() {
    const {user} = AuthUser();
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }

return (
    <>
    <div className="">
    
       
         <header>
              <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                  <>
                    <Navbar.Brand  href="#home"><span><img className="logo" src={balonNaranja} alt="nice"/></span>MAXI-BASKET</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as = {Link} to ={"listar-delegado"}>DELEGADOS</Nav.Link>
                        <Nav.Link as = {Link} to ={"listar-jugador"}>JUGADORES</Nav.Link>
                        <Nav.Link as = {Link} to ={"listar-juez"}>JUECES</Nav.Link>
                                           
                      </Nav>
                      <Nav>                       
                         <Nav.Link as = {Link} to ={""} onClick={logoutUser} className="text-center"><span className="text-white"><i class="fas fa-user-tie">{user.email}</i></span><br></br> Cerrar Seción </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </>
                </Navbar>
        </header>

    
        <Routes>
        <Route path="/" element={<Usuario/>}/>
        <Route path="validarregistro" element={<ValidarRegistro />} />
        <Route path="form-jugador" element={<Formjugador />} />
        <Route path="form-delegado" element={<FormDelegado />} />
        <Route path="form-juez" element={<Formjuez />} />
        <Route path="listar-jugador" element={<ListarJugador />} />
        <Route path="listar-juez" element={<ListarJuez />} />
        <Route path="listar-delegado" element={<ListarDelegado />} />
        <Route path='/editar-juez/:id' element={ <EditarJuez/> } />
        <Route path='/editar-jugador/:id' element={ <EditarJugador/> } />
        <Route path='/editar-delegado/:id' element={ <EditarDelegado/> } />
        </Routes>
        

        <footer className="pie-pagina" expand="lg">
            
            
            <Card className="text-center bg-dark text-white">          
              <Card.Body>
                <Card.Title><small>&copy; 2022 <b>SAS</b> - Todos los Derechos Reservados.</small></Card.Title>                        
              </Card.Body>
              
            </Card>
          
        </footer>

    </div>
    </>
);
}

export default Usuario;
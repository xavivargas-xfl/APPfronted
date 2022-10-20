import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Nav} from "react-bootstrap"
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
    <div className="container p-3 my-3 bg-dark text-white">
            <h3>BIENVENIDO</h3>
            <h4>Usuario :  {user.name}------------------- Email :  {user.email}</h4>    
    </div>  
    <div className="container">
        <h1 style={{color:"orange", textAlign:"center"}}>LIGA DE BASKET</h1>
        <header>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0 w-100">
                    <li className="nav-item active">
                    <Nav.Link as = {Link} to ={"listar-delegado"}><span>DELEGADOS</span></Nav.Link>
                    </li>
                    <li className="nav-item active">
                    <Nav.Link as = {Link} to ={"listar-jugador"}><span>JUGADORES</span></Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link as = {Link} to ={"listar-juez"}><span>JUECES</span></Nav.Link>
                    </li>
                    <li className="nav-item flex-fill">
                    </li>
                    <li className="nav-item">
                    <span role="button" className="nav-link" onClick={logoutUser}>CERRAR SESION</span>
                    </li>
                    </ul>                   
                </div>
            </nav>
            </div>
        </header>
    
        <Routes>
        <Route path="/" element={<Usuario />} />
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
    </div>
    </>
);
}

export default Usuario;
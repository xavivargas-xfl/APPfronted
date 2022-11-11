import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Nav} from "react-bootstrap"
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
import ListarCampeonato from "./ListarCampeonato";
import ListarEquipo from "./ListarEquipo";

function Home() {
return (
    <div className="container">
        <h1 style={{color:"orange", textAlign:"center"}}>LIGA DE BASKET</h1>
        <header>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Nav.Link as = {Link} to ={"hola"}><span><img className="logo" src="./pngwing.com.png"/></span></Nav.Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0 w-100">
                    <li className="nav-item">
                    <Nav.Link as = {Link} to ={"register"}><span>REGISTRO</span></Nav.Link>
                    </li>
                    <li className="nav-item flex-fill">
                    </li>
                    <li className="nav-item">
                    <Nav.Link as = {Link} to ={"login"}><span>INICIAR SESION</span></Nav.Link>
                    </li>
                    </ul>                   
                </div>
            </nav>
            </div>
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
        <Route path="listar-campeonato" element={<ListarCampeonato />} />
        <Route path="listar-equipo" element={<ListarEquipo />} />
        </Routes>
    <div className="container">
    <div className="jojo" >
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>                
                        <img className="lol" src="./pngwing.com.png" alt="Logo de SLee Dw"/>                   
                </figure>
            </div>
            <div className="box2">
                <p>SMART ACTION SOFTWARE</p>
                <p>copyright@</p>
                <p>dev.sas@gmail.com</p>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>SAS</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </div>
    </div>  
    </div>
);
}

export default Home;
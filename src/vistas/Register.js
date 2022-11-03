import * as React from "react";
import axios from "axios";
import url from './url'

export default function Register() {
    const [usuario,setUsuario]= React.useState({codigo:"", rol:"",email:"", ci:""});

    const submitForm = () =>{
        const r = axios.post(`${url}pre-registro`, usuario);
        console.log(r);
        
    }

    return(
        <div className="row justify-content-center pt-1">
            <div className="col-sm-4">
                <div className="card p-4">
                    <h1 className="text-center mb-3">PRE-REGISTRO</h1>
                    <div className="form-group">
                        <label>Codigo:</label>
                        <input value={usuario.codigo} type="text" className="form-control" placeholder="Enter codigo"
                        onChange={(e)=>{setUsuario({...usuario,codigo:e.target.value})}} 
                        id="name" />
                    </div>
                    <div className="form-group">
                        <label>Rol:</label>
                        <input value={usuario.rol} type="text" className="form-control" placeholder="Enter rol"
                        onChange={(e)=>{setUsuario({...usuario,rol:e.target.value})}} 
                        id="rol" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input value={usuario.email} type="email" className="form-control" placeholder="Enter email"
                        onChange={(e)=>{setUsuario({...usuario,email:e.target.value})}} 
                        id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Carnet de identidad:</label>
                        <input value={usuario.ci} type="text" className="form-control" placeholder="Enter ci"
                        onChange={(e)=>{setUsuario({...usuario,ci:e.target.value})}} 
                        id="ci" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-secondary mt-4">Enviar</button>
                </div>
            </div>
        </div>
    )
}
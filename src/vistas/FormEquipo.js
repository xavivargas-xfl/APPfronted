import * as React from "react";
//import {Link } from "react-router-dom";
import '../Estilos/Formjugador.css'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'




function FormEquipo() {
    
    const navigate = useNavigate()
    const [equipo, setEquipo]=React.useState({nombre:"", categoria:"", pais:"", codigo:""});

    async function guardarEquipo(){
        const res = await axios.post("http://localhost:8000/api/add-equipo", equipo);
        console.log(res);
        navigate('/listar-equipo')
    }


    return (
    <>
    <div className="contenido">
        <div className="modal-header bg-secondary   justify-content-center">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i> Registro </h5>
                
        </div>

        <div className="card-shadow">
            <div className="modal-body">
                <form action=""  >
                    <div classname="d-flex justify-content-center">
                            <div className="card-body">
                                    <div className="text-center">
                                            <h4 class="text-secondary font-weight-bold">Registro de Equipo</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>

                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                
                                        <div className="col-md-6">
                                            <span class="text-secondary font-weight-bold float-left">DATOS DE EQUIPO</span>
                                                <table className="col-md-12">
                                                    <tbody>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre  :*</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={equipo.nombre} onChange={(e)=>{setEquipo({...equipo,nombre:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese  Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Categoría :*</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={equipo.categoria} onChange={(e)=>{setEquipo({...equipo,categoria:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="categoria" id="categoria" placeholder="Ingrese Categoría" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >País :*</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={equipo.pais} onChange={(e)=>{setEquipo({...equipo,pais:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="pais" id="pais" placeholder="Ingrese País" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                        
                                                
                                                    
                                                    <tr>
                                                        <th className="text-right font-italic" >Numero de Recibo :*</th>
                                                        <td className="border-bottom border-dark" >
                                                        <input value={equipo.codigo} onChange={(e)=>{setEquipo({...equipo,codigo:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="codigo" id="codigo" placeholder="Ingrese número de factura" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                                    
                                                    
                                                    </tbody>
                                                </table>
                                        </div>

                                    
                                        <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                            <th><Link to={`/`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                            
                                                    
                                                <td><button onClick={guardarEquipo} className="btn btn-secondary btn-sm" type="button" > Guardar</button></td>
                                            </tr> 
                                            </tbody>       
                                        </div>
                                </div>
                            </div>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    
    </>
    );
}

export default FormEquipo;

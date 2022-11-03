import * as React from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import url from './url';




function FormDelegado() {
    
    const navigate = useNavigate()
    const [delegado, setDelegado]=React.useState({name:"", apellido:"", ci:"", fechaNac:"", foto:""});

    async function guardarDelegado(){
        const res = await axios.post(`${url}add-delegado`, delegado);
        console.log(res);
        navigate('/listar-delegado')
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
                    <div className="d-flex justify-content-center">
                            <div className="card-body">
                                    <div className="text-center">
                                            <h4 className="text-secondary font-weight-bold">Nuevo Registro de delegado</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>

                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                
                                        <div className="col-md-6">
                                            <span className="text-secondary font-weight-bold float-left">DATOS PERSONALES</span>
                                                <table className="col-md-12">
                                                    <tbody>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={delegado.name} onChange={(e)=>{setDelegado({...delegado,name:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={delegado.apellido} onChange={(e)=>{setDelegado({...delegado,apellido:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Carnet de Identidad :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={delegado.ci} onChange={(e)=>{setDelegado({...delegado,ci:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="documento" id="documento" placeholder="Ingrese su Documento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                        
                                                
                                                    
                                                    <tr>
                                                        <th className="text-right font-italic" >Foto de Perfil :</th>
                                                        <td className="border-bottom border-dark" >
                                                        <input value={delegado.foto} onChange={(e)=>{setDelegado({...delegado,foto:e.target.value})}} type="file" className="form-control form-control-sm border-0" name="foto" id="foto" placeholder="Seleccione un archivo" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Fecha de nacimiento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={delegado.fechaNac} onChange={(e)=>{setDelegado({...delegado,fechaNac:e.target.value})}} type="date" className="form-control form-control-sm border-0" name="fecha_nac" id="fecha_nac" placeholder="Ingrese su fecha de Nacimiento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                                    
                                                    
                                                    </tbody>
                                                </table>
                                        </div>

                                    
                                        <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                            <th><Link to={`/`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                            
                                                    
                                                <td><button onClick={guardarDelegado} className="btn btn-secondary btn-sm" type="button" > Guardar</button></td>
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

export default FormDelegado;
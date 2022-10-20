import * as React from "react";
import axios from "axios";
import '../Estilos/Formjugador.css';

function PreRegistro() {
    const [delegado, setDelegado]=React.useState({email:"" , password:"" , name:"", apellido:"", rol:"", nacionalidad:"", sexo:"" , edad:""});

    async function guardarRegistro(){
        const res = await axios.post("http://localhost:8000/api/pre-registro", delegado);
        console.log(res);
    }
    return(
        <>
        <div className="container">
            <div className="modal-header bg-primary">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i> Pre-Registro </h5>
                
            </div>
        <div className="card-shadow">
            <div className="modal-body">
                <form action=""  >
                    <div className="d-flex justify-content-center">
                            <div className="card-body">
                                    <div className="text-center">
                                            <h4 className="text-primary font-weight-bold">Pre-Registro de Delegados</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>
                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                        <div className="col-md-6">
                                        <span className="text-primary font-weight-bold float-left">DATOS PERSONALES</span>
                                                <table className="col-md-12">
                                                    <div>
                                                    <tr>
                                                        <th className="text-right font-italic">Email :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={delegado.email} onChange={(e)=>{setDelegado({...delegado,email:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="email" id="email" placeholder="Ingrese su Email" required></input>                                                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic">Contraseña :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={delegado.password} onChange={(e)=>{setDelegado({...delegado,password:e.target.value})}} type="password" 
                                                            className="form-control form-control-sm border-0" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña" required></input>                                                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={delegado.name} onChange={(e)=>{setDelegado({...delegado,name:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required></input>                                                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={delegado.apellido} onChange={(e)=>{setDelegado({...delegado,apellido:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" required></input>                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Rol :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={delegado.rol} onChange={(e)=>{setDelegado({...delegado,rol:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="rol" id="rol" placeholder="Ingrese su Rol" required></input>                           
                                                        </td>
                                                    </tr>                  
                                                    <tr>
                                                        <th className="text-right font-italic" >Pais :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={delegado.nacionalidad} onChange={(e)=>{setDelegado({...delegado,nacionalidad:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="nacionalidad" id="nacionalidad" placeholder="Pais" required></input>                                                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Sexo :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={delegado.sexo} onChange={(e)=>{setDelegado({...delegado,sexo:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="sexo" id="sexo" placeholder="Ingrese su Sexo" required></input>                   
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic">Edad :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={delegado.edad} onChange={(e)=>{setDelegado({...delegado,edad:e.target.value})}} type="text" 
                                                            className="form-control form-control-sm border-0" name="edad" id="edad" placeholder="Ingrese su Edad" required></input>                                                          
                                                        </td>
                                                    </tr>                                                                                                                        
                                                    </div>
                                                </table>
                                        </div>
                                        <div className="modal-footer">
                                            <div>
                                            <tr>
                                                <th><button className="btn btn-primary" type="button" ><i className="fas fa-window-close"></i> Cancelar</button></th>
                                                    
                                                <td><button onClick={guardarRegistro} className="btn btn-primary" type="button" > Guardar</button></td>
                                            </tr> 
                                            </div>       
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
export default PreRegistro;
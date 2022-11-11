import * as React from "react";
//import {Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import {useValidarCampos} from '../hook/useValidarCampos';

const formInicial = {ci:"",nombre:"",apellido:"",sexo:"",nacionalidad:"",fechaNac:"",foto:"",rol:"d"};
const validarForm = (form ) => {
    let errors = {}
    let tipoAlfabetico = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //let tipoEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let cantCaracter = /^.{3,50}$/;
    let cantCaracterCi = /^.{6,10}$/;

    //validarCi();
    if(!form.ci.trim()){
        errors.ci="el campo es requerido"
    }else if(!cantCaracterCi.test(form.ci.trim())){
        errors.ci = "el campo debe contener entre 3 asta 10 caracteres";
    }

    if(!form.nombre.trim()){
        errors.nombre="el campo es requerido"
    }else if(!tipoAlfabetico.test(form.nombre.trim())){
        console.log(form.nombre.trim());
        errors.nombre = "el campo Nombre solo acepta letras y espacios";
    }else if(!cantCaracter.test(form.nombre.trim())){
        errors.nombre = "el campo debe contener entre 3 asta 50 caracteres";
    }

    if(!form.apellido.trim()){
        errors.apellido="el campo es requerido"
    }else if(!tipoAlfabetico.test(form.apellido.trim())){
        console.log(form.apellido.trim());
        errors.apellido = "el campo apellido solo acepta letras y espacios";
    }else if(!cantCaracter.test(form.apellido.trim())){
        errors.apellido = "el campo debe contener entre 3 asta 50 caracteres";
    }

    if(!form.sexo.trim()){
        errors.sexo="el campo es requerido"
    }
    
    if(!form.nacionalidad.trim()){
        errors.nacionalidad="el campo es requerido"
    }

    if(!form.fechaNac.trim()){
        errors.fechaNac="el campo es requerido"
    }/*else if(form.fechaNac>"2004/01/01"){
        errors.fechaNac="para registrar de ser mayor de edad"
    }*/

    if(!form.foto.trim()){
        errors.foto="el campo es requerido"
    }else if(form.foto.endsWith(".png") || form.foto.endsWith(".jpg")){
        //errors.foto="Selecione un formato de foto .png o .jpg"
    }else{
        errors.foto="Selecione un formato de foto .png o .jpg"
    }

    return errors;
}

let styles = { //le damos estilo
    fontWeight:"bold",
    color:"#dc3545"
}
function FormDelegado() {

    const {
        form,
        errors,
        handleChange,
        handleBlur
    } = useValidarCampos(formInicial, validarForm);

    
    const navigate = useNavigate()
    
    async function guardardelegado(){
        
        if(Object.keys(errors).length ===0){
            const res = await axios.post("http://localhost:8000/api/add-persona", form);
        console.log(res);
       // form.reset();
        navigate('/listar-delegado')
        }else{
            alert("Complete los campos correctamente")
        }
        
    }


    return (
    <>
    <div className="contenido">
        <div className="modal-header bg-secondary   justify-content-center">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i> Registro </h5>
                
        </div>

        <div className="card-shadow">
            <div className="modal-body">
                <form action="" >
                    <div classname="d-flex justify-content-center">
                            <div className="card-body">
                                    <div className="text-center">
                                            <h4 class="text-secondary font-weight-bold">Nuevo Registro de delegado</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>

                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                
                                        <div className="col-md-6">
                                            <span class="text-secondary font-weight-bold float-left">DATOS PERSONALES</span>
                                                <table className="col-md-12">
                                                    <tbody>
                                                    <tr>
                                                        <th className="text-right font-italic" >Carnet de Identidad :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={form.ci} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="ci" id="ci" placeholder="Ingrese su documento Identidad" onBlur={handleBlur} required></input>
                                                            {errors.ci && <p style={styles}>{errors.ci}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={form.nombre} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese su Nombre" onBlur={handleBlur}  required></input>
                                                            {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={form.apellido} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" onBlur={handleBlur} required></input>
                                                            {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Genero :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={form.sexo} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="sexo" id="sexo" placeholder="Ingrese su Genero" onBlur={handleBlur} required></input>
                                                            {errors.sexo && <p style={styles}>{errors.sexo}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Nacionalidad :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={form.nacionalidad} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="nacionalidad" id="nacionalidad" placeholder="Ingrese su Nacionalidad" onBlur={handleBlur} required></input>
                                                            {errors.nacionalidad && <p style={styles}>{errors.nacionalidad}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Fecha de nacimiento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={form.fechaNac} onChange={handleChange} type="date" className="form-control form-control-sm border-0" name="fechaNac" id="fechaNac" placeholder="Ingrese su fecha de Nacimiento" onBlur={handleBlur} required></input>
                                                            {errors.fechaNac && <p style={styles}>{errors.fechaNac}</p>}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Foto de Perfil :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={form.foto} onChange={handleChange} type="file" className="form-control form-control-sm border-0" name="foto" id="foto" placeholder="insertar foto" onBlur={handleBlur} required></input>
                                                            {errors.foto && <p style={styles}>{errors.foto}</p>}
                                                        </td>
                                                    </tr>
                                                    
                                                    </tbody>
                                                </table>
                                        </div>

                                    
                                        <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                            <th><Link to={`/listar-delegado`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>  
                                                <td><button onClick={guardardelegado} className="btn btn-secondary btn-sm" type="button" > Guardar</button></td>
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
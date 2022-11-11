import * as React from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import {useValidarCampos} from '../hook/useValidarCampos';

const formInicial = {nombre:"",fechaInicio:"",fechaFin:"",categoria:""};
const validarForm = (form ) => {
    let errors = {}
    let tipoAlfabetico = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let cantCaracterNom = /^.{3,50}$/;
    if(!form.nombre.trim()){
        errors.nombre="El campo es requerido"
    }else if(!cantCaracterNom.test(form.nombre.trim())){
        errors.nombre = "El campo debe contener entre 3 asta 50 caracteres";
    }

    if(!form.fechaInicio.trim()){
        errors.fechaInicio="El campo es requerido"
    }

    if(!form.fechaFin.trim()){
        errors.fechaFin="El campo es requerido"
    }

    if(!form.categoria.trim()){
        errors.categoria="el campo es requerido"
    }else if(!cantCaracterNom.test(form.categoria.trim())){
        errors.categoria = "El campo debe contener entre 3 asta 50 caracteres";
    }

    return errors;
}
let styles = { //le damos estilo
    fontWeight:"bold",
    color:"#dc3545",
}
var fechaHoy=()=>{
    var tiempo = new Date();
    var dia = tiempo.getDate();
    var mes = tiempo.getMonth()+1;
    var year = tiempo.getFullYear();
    if(dia<10){
        dia="0"+dia;
    }
    if(mes<10){
        mes="0"+mes;
    }
    return `${year}-${mes}-${dia}`;
}
function FormCampeonato() {

    const {
        form,
        errors,
        handleChange,
        handleBlur
    } = useValidarCampos(formInicial, validarForm);

    const navigate = useNavigate()
    //const [campeonato,setCampeonato]=React.useState({nombre:"",fechaInicio:"",fechaFin:"",categoria:""});
    
    async function guardarCampeonato(){
        if(Object.keys(errors).length ===0){
        const res = await axios.post("http://localhost:8000/api/add-camp",form);
        console.log(res);
        navigate('/listar-campeonato')
        }else{
            alert("debe completar los campos");
        }
    }

    return (
        <>
        <div className="contenido">
            <div className="modal-header bg-secondary   justify-content-center">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i>Registro</h5>
            </div>
          
        <div className="card-shadow">
            <div className="modal-body">
                <form action="">
                    <div className="d-flex justify-content-center">
                        <div className="card-body">
                            <div className="text-center">
                                <h4 className="text-secondary font-weight-bold">Creacion de nuevo campeonato</h4>
                                <span>Los campos con (*) son obligatorios</span>
                            </div>
                                <hr className="sidebar-divider text-bg-dark"></hr>
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="text-secondary font-weight-bold float-left">DATOS DEL CAMPEONATO</span>
                                    <table className="col-md-12">
                                        <tbody>
                                            <tr>
                                                <th className="text-right font-italic">Nombre :</th>
                                                <td className="border-bottom border-dark">
                                                    <input value={form.nombre} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese un nombre del campeonato" onBlur={handleBlur} required></input>
                                                    {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="text-right font-italic">Fecha Inicio :</th>
                                                <td className="border-bottom border-dark">
                                                    <input value={form.fechaInicio} onChange={handleChange} type="date" min={fechaHoy()}  className="form-control form-control-sm border-0" name="fechaInicio" id="fechaInicio" placeholder="Ingrese fecha inicio del campeonato" onBlur={handleBlur} required></input>
                                                    {errors.fechaInicio && <p style={styles}>{errors.fechaInicio}</p>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="text-right font-italic">Fecha Fin :</th>
                                                <td className="border-bottom border-dark">
                                                    <input value={form.fechaFin} onChange={handleChange} type="date" min={form.fechaInicio} className="form-control form-control-sm border-0" name="fechaFin" id="fechaFin" placeholder="Ingrese fecha final del campeonato" onBlur={handleBlur} required></input>
                                                    {errors.fechaFin && <p style={styles}>{errors.fechaFin}</p>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="text-right font-italic">Categoria :</th>
                                                <td className="border-bottom border-dark">
                                                    <input value={form.categoria} onChange={handleChange} type="text" className="form-control form-control-sm border-0" name="categoria" id="categoria" placeholder="Ingrese categoria" onBlur={handleBlur} required></input>
                                                    {errors.categoria && <p style={styles}>{errors.categoria}</p>}
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>

                                </div>
                                <div className="modal-footer">
                                        <tbody>
                                            <tr>
                                                <th><Link to={`/`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                                <td><button onClick={guardarCampeonato} className="btn btn-secondary btn-sm" type="button" > Guardar</button></td>
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

export default FormCampeonato;







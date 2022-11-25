import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

//const endpoint = 'http://localhost:8000/api/add-juez'

const FormjuezCopia = () => {
/*
    const [nameJuez, setName] = useState('')
    const [apellidoJuez, setApellido] = useState('')
    const [ci, setDocumento] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    const [genero, setGenero] = useState('')
    const [foto, setFoto] = useState(null)     
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()       
        const res = axios.post("http://localhost:8000/api/add-juez", {nameJuez: nameJuez, apellidoJuez: apellidoJuez, ci: ci,fechaNac: fechaNac,genero: genero,foto: foto})
        console.log(res);
        navigate('/listar-juez')
    }
    */
   const [archivos, setArchivos]=useState(null)
   const navigate = useNavigate()

    const subirArchivos=e=>{
        setArchivos(e);
        }

    const insertarArchivos=async()=>{
        const formulario =new FormData();
            for (let index = 0; index < archivos; index++){
                formulario.append("nameJuez","apellidoJuez","documento","fecha_nac","genero","foto",archivos[index]);
            }console.log(formulario);

      /*  await axios.post("http://localhost:8000/api/add-juez", formulario)
        .then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
        console.log(formulario);
        navigate('/listar-juez')
        */

        const res = axios.post("http://localhost:8000/api/add-juez", formulario)
        console.log(res);
        navigate('/listar-juez')
    }

    
    return (
        <>
        <br></br>

        <div className='container'>
        <div className="modal-header bg-secondary    justify-content-center">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i> Registro de Juez </h5>
        </div>

        <div className="card-shadow">
            <div className="modal-body">
                <form action="" method="POST" id="" enctype="multipart/form-data">
                    <div className="d-flex justify-content-center">
                        <div className="card-body">
                                <div className="text-center">
                                            <h4 className   ="text-secondary font-weight-bold">Nuevo Registro de Juez</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>
                                    <hr className="sidebar-divider text-bg-dark"></hr>
                            <div className="row">

                                <div className='col-mb-4'>
                                <table className="col-md-8">
                                                    <tbody>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input  onChange={(e)=>{subirArchivos(e.target.nombre)}} type="text" className="form-control form-control-sm border-0" name="nameJuez" id="nombre" placeholder="Ingrese su Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input   onChange={(e)=>{subirArchivos(e.target.apellido)}} type="text" className="form-control form-control-sm border-0" name="apellidoJuez" id="apellido" placeholder="Ingrese sus Apellidos" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Documento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input   onChange={(e)=>{subirArchivos(e.target.documento)}} type="text" className="form-control form-control-sm border-0" name="ci" id="documento" placeholder="Ingrese su Documento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                         
                                                
                                                         <tr>
                                                        <th className="text-right font-italic" >Fecha de nacimiento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  onChange={(e)=>{subirArchivos(e.target.fecha_nac)}} type="date" className="form-control form-control-sm border-0" name="fechaNac" id="fechaNac" placeholder="Ingrese su fecha de Nacimiento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                
                                                   
                                                    <tr>
                                                        <th className="text-right font-italic" >Genero :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  onChange={(e)=>{subirArchivos(e.target.genero)}} type="text" className="form-control form-control-sm border-0" name="genero" id="genero" placeholder="Ingrese su fecha de Nacimiento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                     <tr>
                                                        <th className="text-right font-italic" >Foto de Perfil :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  multiple onChange={(e)=>{subirArchivos(e.target.foto)}} type="file" className="form-control form-control-sm border-0" name="foto" id="foto" placeholder="Seleccione un archivo" required></input>                                                        
                                                         
                                                        </td>
                                                    </tr>
                                                                    
                                                    
                                                    </tbody>
                                                </table>    
                                </div>
                                <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                               
                                                <th><Link to={`/`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                                    
                                                <td><button className='btn btn-secondary btn-sm'  onClick={()=>insertarArchivos()} > Guardar</button></td>
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

  export default FormjuezCopia;
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate , useParams, Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/'

const EditarDelegado = () => {

    const [ci, setCi] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [sexo, setSexo] = useState('')
    const [nacionalidad, setNacionalidad] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    const [foto, setFoto] = useState('')
    const [rol, setRol] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}editar-persona/${id}`, {ci:ci, nombre: nombre, apellido: apellido, sexo: sexo, nacionalidad: nacionalidad, fechaNac: fechaNac,foto: foto, rol: rol})
        
        if(rol ==='j'){
            navigate('/listar-jugador')
        }else if(rol === 'd'){
            navigate('/listar-delegado')
        }else if(rol === 'z'){
            navigate('/listar-juez')
        }
        
    }

    useEffect( () =>{
        const getdelegadoById = async () => {
            const response = await axios.get(`${endpoint}index-persona/${id}`)
            setCi(response.data.ci)
            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setSexo(response.data.sexo)
            setNacionalidad(response.data.nacionalidad)
            setFechaNac(response.data.fechaNac)         
            setFoto(response.data.foto)
            setRol(response.data.rol)
        }
        getdelegadoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    

    return (
        <>
        <div className="contenido">
        <div className="modal-header bg-secondary   justify-content-center">
                <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i className="fas fa-file-alt"></i> Registro </h5>
                
        </div>

        <div className="card-shadow">
            <div className="modal-body">
                <form onSubmit={update}>
                    <div className=" justify-content-center">
                            <div className="card-body">

                                    <div className="text-center">
                                            <h4 className="text-secondary font-weight-bold">Editar datos Personales</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>

                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                
                                        <div className="col-md-6">
                            
                                                <table className="col-md-12">
                                                    <tbody>
                                                    <tr>
                                                        <th className="text-right font-italic">Carnet de Identidad:</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={ci} onChange={(e)=>{setCi(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="ci" id="ci" placeholder="Ingrese su Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={apellido} onChange={(e)=>{setApellido(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Genero :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={sexo} onChange={(e)=>{setSexo(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="sexo" id="sexo" placeholder="Ingrese su Documento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Nacionalidad :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={nacionalidad} onChange={(e)=>{setNacionalidad(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="nacionalidad" id="nacionalidad" placeholder="Ingrese su Documento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Fecha de nacimiento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={fechaNac} onChange={(e)=>{setFechaNac(e.target.value)}} type="date" className="form-control form-control-sm border-0" name="fechaNac" id="fechaNac" placeholder="Ingrese su fecha de Nacimiento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Foto de Perfil :</th>
                                                        <td className="border-bottom border-dark" >
                                                        <input value={foto} onChange={(e)=>{setFoto(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="foto" id="foto" placeholder="Seleccione un archivo" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                        </div>

                                        
                                        <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                            <th><Link to={`/listar-delegado`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                                    
                                                    <td><button className='btn btn-secondary btn-sm' type="submit" > Actualizar</button></td></tr> 
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

export default EditarDelegado;

import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate , useParams, Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/'

const EditarJugador = () => {

    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [ci, setDocumento] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    //const [genero, setGenero] = useState('')
    const [foto, setFoto] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}editar-jugador/${id}`, {name: name, apellido: apellido, ci: ci,fechaNac: fechaNac,foto: foto})
        navigate('/listar-jugador')
    }

    useEffect( () =>{
        const getJugadorById = async () => {
            const response = await axios.get(`${endpoint}index-Jugador/${id}`)
            setName(response.data.name)
            setApellido(response.data.apellido)
            setDocumento(response.data.ci)
            setFechaNac(response.data.fechaNac)         
            setFoto(response.data.foto)
        }
        getJugadorById()
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
                                            <h4 className="text-secondary font-weight-bold">Nuevo Registro de Jugador</h4>
                                            <span>Los campos con (*) son obligatorios</span>
                                    </div>

                                            <hr className="sidebar-divider text-bg-dark"></hr>
                                <div className="row">
                                
                                        <div className="col-md-6">
                            
                                                <table className="col-md-12">
                                                    <tbody>

                                                    <tr>
                                                        <th className="text-right font-italic">Nombre (s) :</th>
                                                        <td className="border-bottom border-dark">
                                                            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="nombre" id="nombre" placeholder="Ingrese su Nombre" required></input>
                                                            
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="text-right font-italic" >Apellidos :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={apellido} onChange={(e)=>{setApellido(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Documento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input  value={ci} onChange={(e)=>{setDocumento(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="documento" id="documento" placeholder="Ingrese su Documento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                
                                                
                                                    
                                                    <tr>
                                                        <th className="text-right font-italic" >Foto de Perfil :</th>
                                                        <td className="border-bottom border-dark" >
                                                        <input value={foto} onChange={(e)=>{setFoto(e.target.value)}} type="text" className="form-control form-control-sm border-0" name="foto" id="foto" placeholder="Seleccione un archivo" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-right font-italic" >Fecha de nacimiento :</th>
                                                        <td className="border-bottom border-dark" >
                                                            <input value={fechaNac} onChange={(e)=>{setFechaNac(e.target.value)}} type="date" className="form-control form-control-sm border-0" name="fecha_nac" id="fecha_nac" placeholder="Ingrese su fecha de Nacimiento" required></input>
                                                            
                                                        </td>
                                                    </tr>
                                                                    
                                                    
                                                    </tbody>
                                                </table>
                                        </div>

                                        
                                        <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                            <th><Link to={`/listar-jugador`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                                    
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

export default EditarJugador;

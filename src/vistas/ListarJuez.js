import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ListarJuez = () => {
    
  const [ jueces , setJuez ] = useState( [] )

  useEffect ( ()=> {
      getAllJuez()
  }, [])

  const getAllJuez = async () => {
    const response = await axios.get(`${endpoint}/rol-persona/z`)
    setJuez(response.data)
    //console.log(response.data)
  }

  const deleteJuez = async (id) => {
    await axios.delete(`${endpoint}/eliminar-persona/${id}`)
    getAllJuez()
  }
    return (
      <>
            <div className='contenido'>
                    <div className='d-grid gap-2'>
                        <Link to="/form-juez" className='btn btn-secondary  btn-lg mt-2 mb-2 text-white'>Añadir Juez</Link>
                    </div>
                    <div className="card-shadow">
                        <div className="modal-body"> 
                                <table className='table table-striped'>
                                    <thead className='bg-secondary text-white'>
                                        <tr>
                                          <th>Id</th>
                                          <th>Documento Identidad:</th>
                                          <th>Nombre</th>
                                          <th>Apellidos</th>
                                          <th>Genero</th>
                                          <th>nacionalidad</th>
                                          <th>Fecha nacimiento</th>
                                          <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { jueces.map( (juez,index) => (
                                            <tr key={0}> 
                                                <td> {index+1} </td> 
                                                <td> {juez.ci} </td> 
                                                <td> {juez.nombre} </td> 
                                                <td> {juez.apellido} </td>    
                                                <td> {juez.sexo} </td> 
                                                <td> {juez.nacionalidad} </td> 
                                                <td> {juez.fechaNac} </td> 
                                                  
                                                <td>
                                                    <Link to={`/editar-delegado/${juez.id}`} className="fa-solid fa-pen-to-square"></Link>
                                                    <button onClick={ ()=>deleteJuez(juez.id) } className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
                                                </td>

                                            </tr>
                                        )) }
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>

      </>
    );
  }

  export default ListarJuez;
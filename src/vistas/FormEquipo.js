import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ListarEquipo = () => {
    
  const [ equipos , setEquipo] = useState( [] )

  useEffect ( ()=> {
      getAllEquipos()
  }, [])

  const getAllEquipos = async () => {
    const response = await axios.get(`${endpoint}/listar-equipo`)
    setEquipo(response.data)
    //console.log(response.data)
  }

  const deleteEquipo = async (id) => {
    await axios.delete(`${endpoint}/eliminar-equipo/${id}`)
    getAllEquipos()
  }
    return (
      <>
            <div className='contenido'>
                    {/**<div className='d-grid gap-2'>
                        <Link to="/form-juez" className='btn btn-secondary  btn-lg mt-2 mb-2 text-white'>Añadir Equipos</Link>
                    </div>*/}
                    <div className="card-shadow">
                        <div className="modal-body"> 
                                <table className='table table-striped'>
                                    <thead className='bg-secondary text-white'>
                                        <tr>
                                          <th>Id</th>
                                          <th>Nombre de equipo:</th>
                                          <th>Categoria </th>
                                          <th>pais</th>
                                          <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { equipos.map( (equipo,index) => (
                                            <tr key={0}> 
                                                <td> {index+1} </td> 
                                                <td> {equipo.nombre_equipo} </td> 
                                                <td> {equipo.categoria} </td> 
                                                <td> {equipo.pais_equipo} </td>    
                                                
                                                <td>
                                                    
                                                    <button onClick={ ()=>deleteEquipo(equipo.id) } className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
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

  export default ListarEquipo;
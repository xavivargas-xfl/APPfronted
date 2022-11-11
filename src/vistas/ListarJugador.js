import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

function ListarJugador() {
    const [ jugadores, setJugador ] = useState( [] )

    useEffect ( ()=> {
        getAllJugador()
    }, [])

const getAllJugador = async () => {
    const response = await axios.get(`${endpoint}/rol-persona/j`)
    setJugador(response.data)
    //console.log(response.data)
}

const deleteJugador = async (id) => {
    await axios.delete(`${endpoint}/eliminar-persona/${id}`)
    getAllJugador()
}


return (
    <>
    <div className='contenido'>
        <div className='d-grid gap-2'>
            <Link to="/form-jugador" className='btn btn-secondary btn-lg mt-2 mb-2 text-white'>Añadir Jugador</Link>
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
                        { jugadores.map( (jugador,index) => (
                            
                            <tr key={0} >
                                <td> {index+1} </td>
                                <td> {jugador.ci} </td> 
                                <td> {jugador.nombre} </td>    
                                <td> {jugador.apellido} </td> 
                                <td> {jugador.sexo} </td> 
                                <td> {jugador.nacionalidad} </td>  
                                <td> {jugador.fechaNac  } </td>
                                <td>
                                    <Link to={`/editar-delegado/${jugador.id}`} className="fa-solid fa-pen-to-square"></Link>
                                    <button onClick={ ()=>deleteJugador(jugador.id) }className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
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

export default ListarJugador;
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import url from './url'

//const endpoint = 'http://localhost:8000/api'

function ListarDelegado() {
    const [ delegados, setDelegado ] = useState( [] )

    useEffect ( ()=> {
        getAllDelegado()
    }, [])

const getAllDelegado = async () => {
    const response = await axios.get(`${url}listar-delegado`)
    setDelegado(response.data)
    //console.log(response.data)
}

const deleteDelegado = async (id) => {
    await axios.delete(`${url}/eliminar-delegado/${id}`)
    getAllDelegado()
}


return (
    <>
    <div className='contenido'>
        <div className='d-grid gap-2'>
            <Link to="/form-delegado" className='btn btn-secondary btn-lg mt-2 mb-2 text-white'>Añadir Delegado</Link>
        </div>

        <div className="card-shadow">
            <div className="modal-body"> 

                <table className='table table-striped'>
                    <thead className='bg-secondary text-white'>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Documento</th>
                            <th>Fecha</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { delegados.map( (delegado,index) => (
                            
                            <tr key={delegado.id} >
                                <td> {index+1} </td>    
                                <td> {delegado.name} </td>    
                                <td> {delegado.apellido} </td>    
                                <td> {delegado.ci} </td>
                                <td> {delegado.fechaNac  } </td>
                                <td>
                                    <Link to={`/editar-delegado/${delegado.id}`} className="fa-solid fa-pen-to-square"></Link>
                                    <button onClick={ ()=>deleteDelegado(delegado.id) }className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
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

export default ListarDelegado;
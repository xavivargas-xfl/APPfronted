import * as React from "react"
import {useEffect, useState} from 'react'
import axios from 'axios'
import url from './url'

const ValidarRegistro = () =>  {
    const [ registros , setregistro ] = useState( [] )

    useEffect ( ()=> {
        getAllregistro()
    }, [])

    const getAllregistro = async () => {
        const response = await axios.get(`${url}index`)
        setregistro(response.data)
    //console.log(response.data)
    }

    const deleteregistro = async (id) => {
        await axios.delete(`${url}eliminar-registro/${id}`)
        getAllregistro()
    }

    const addUsuario = async (id,rol,email,password) => {
        console.log(rol,email,password);
        const r = axios.post(`${url}register`,{rol:rol,email:email,password:password});
        console.log(r);
        deleteregistro(id);
    }

    return (
        <>
            <div className='contenido'>
                    <div className="card-shadow">
                        <div className="modal-body"> 
                                <table className='table table-striped'>
                                    <thead className='bg-secondary text-white'>
                                        <tr>
                                            <th>Num.</th>
                                            <th>Codigo</th>
                                            <th>Rol</th>
                                            <th>Email</th>
                                            <th>Cedula de identidad</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { registros.map( (registro,index) => (
                                            <tr key={registro.id}> 
                                                <td> {index+1} </td> 
                                                <td> {registro.codigo} </td> 
                                                <td> {registro.rol} </td>    
                                                <td> {registro.email} </td> 
                                                <td> {registro.ci} </td> 
                                                
                                                <td>
                                                    <button onClick={ ()=>addUsuario(registro.id,registro.rol,registro.email,registro.ci) } className="fa-solid fa-pen-to-square"></button>
                                                    <button onClick={ ()=>deleteregistro(registro.id) } className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
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
export default ValidarRegistro;
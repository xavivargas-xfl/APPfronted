
import React,{useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const endpoint ='http://localhost:8000/api'

function ListarCampeonato(){
    const [campeonatos, setCampeonato] = useState([])

    useEffect(()=>{
        getAllCampeonato()
    }, [])

    const getAllCampeonato = async () => {
        const response = await axios.get(`${endpoint}/listar-camp`);
        setCampeonato(response.data)
        
    }

    const deleteCampeonato = async (id) =>{
        await axios.delete(`${endpoint}/eliminar-camp/${id}`)
        getAllCampeonato()
    }

    return(
        <>
        <div className="contenido">
            <div className='d-grid gap-2' >
                <Link to="/form-campeonato" className="btn btn-secondary btn-lg mt-2 mb-2 text-white">Crear nuevo campeonato</Link>
            </div>

            <div className="card-shadow">
                <div className="modal=body">

                    <table className="table table-striped">
                        <thead className="bg-secondary text-white">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>FechaInicio</th>
                                <th>FechaFin</th>
                                <th>Categoria</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campeonatos.map( (campeonato, index) => (

                                <tr key={campeonato.id}>
                                    <td>{index+1}</td>
                                    <td>{campeonato.nombre}</td>
                                    <td>{campeonato.fechaInicio}</td>
                                    <td>{campeonato.fechaFin}</td>
                                    <td>{campeonato.categoria}</td>
                                    <td>
                                        
                                        <button onClick={()=>deleteCampeonato(campeonato.id)} className="btn btn-sm btn-light btn-circle"><i className="fas fa-trash-alt text-danger"></i></button>
                                        {/**<button onClick={registrar} className="btn btn-sm btn-light btn-circle">registrarse</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    )
}

export default ListarCampeonato;










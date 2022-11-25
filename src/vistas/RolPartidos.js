import axios from 'axios'
import React, {useState, useEffect} from 'react'
    import { useNavigate, Link } from 'react-router-dom'
import {Nav,  Navbar, NavDropdown, Card} from "react-bootstrap"

const endpoint = 'http://localhost:8000/api'

const RolPartidos = () => {

    const [ partidos , setPartido ] = useState( [] )

    useEffect ( ()=> {
        getAllPartido()
    }, [])
  
    const getAllPartido = async () => {
      const response = await axios.get(`${endpoint}/listar-partidos`)
      setPartido(response.data)
      //console.log(response.data)
    }
  
    const deleteJuez = async (id) => {
      await axios.delete(`${endpoint}/eliminar-juez/${id}`)
      getAllPartido()
    }
   

    
    return (
        <>
        
        <div className="modal-header justify-content-center">
        <h3 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i class="fas fa-network-wired"></i> Rol de Partidos </h3>
        </div>
        
        <div className='container'>
            <div className="modal-header bg-secondary    justify-content-center">
                    <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i class="fas fa-basketball-ball"></i> Categoria: {''} 
                        Masculino</h5>
            </div>

            <div className="card-shadow">
                <div className="modal-body">
                     <table className='table table-striped'>
                                    <thead className=' text-black'>
                                        <tr>
                                        <th>Nro.</th>
                                            <th>Hora :</th>
                                            <th>Fecha :</th>
                                            <th>Equipo 1 :</th>
                                            <th>Vs. :</th>
                                            <th>Equipo 2 :</th>                                            
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        
                                            { partidos.map( (partido,index) => (
                                            <tr key={partido.id}> 
                                                  <td> {index+1} </td> 
                                                <td> {partido.hora} </td> 
                                                <td> {partido.fecha} </td>    
                                                <td> {partido.equipo1} </td> 
                                                <td> <th>Vs. :</th></td> 
                                                <td> {partido.equipo2} </td> 
                                                

                                             <td>
                                                    <Link to={``} className="btn btn-sm btn-light btn-circle me-md-2"><i class="far fa-edit text-black"></i></Link>
                                                    <button onClick={ "" } className="btn btn-sm btn-light btn-circle " ><i className="fas fa-trash text-danger"></i></button>
                                                </td>

                                            </tr>
                                            )) }
                                        
                                    </tbody>
                        </table>
                    
                </div>
            </div>
        </div>
{/*------------------------------------------------------*/}
        <div className='container'>
            <div className="modal-header bg-secondary    justify-content-center">
                    <h5 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i class="fas fa-basketball-ball"></i> Categoria: {''} Femenino</h5>
            </div>

            <div className="card-shadow">
                <div className="modal-body">
                <table className='table table-striped'>
                                    <thead className=' text-white'>
                                        <tr>
                                            <th>Hora :</th>
                                            <th>Fecha :</th>
                                            <th>Equipo 1 :</th>
                                            <th>Vs. :</th>
                                            <th>Equipo 2 :</th>                                            
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                             <tr key={''}> 
                                                  <td> {'10:00'} </td> 
                                                <td> {'12/11/2022'} </td> 
                                                <td> {'CBBa-A'} </td>    
                                                <td> {'VS'} </td>
                                                <td> {'VINTO-A' } </td>                                                                                    
                                             <td>
                                                    <Link to={``} className="fa-solid fa-pen-to-square me-md-2"></Link>
                                                    <button onClick={ "" } className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
                                                </td>

                                            </tr>
                                            <tr key={''}> 
                                                  <td> {'10:00'} </td> 
                                                <td> {'12/11/2022'} </td> 
                                                <td> {'CBBa-B'} </td>    
                                                <td> {'VS'} </td>
                                                <td> {'VINTO-B' } </td>                                                                                    
                                             <td>
                                                    <Link to={``} className="fa-solid fa-pen-to-square me-md-2"></Link>
                                                    <button onClick={ "" } className="btn btn-sm btn-light btn-circle" ><i className="fas fa-trash-alt text-danger"></i></button>
                                                </td>

                                            </tr>
                                        
                                    </tbody>
                        </table>
                    
                </div>
            </div>
        </div>

      </>
    );
  }

  export default RolPartidos;
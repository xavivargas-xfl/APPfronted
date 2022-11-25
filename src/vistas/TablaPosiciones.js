import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Nav,  Navbar, NavDropdown, Card, Table, Container, Row, Col} from "react-bootstrap"
import '../Estilos/TablaPosiciones.css'

const endpoint = 'http://localhost:8000/api'

const TablaPosiciones = () => {
    const [ equipos , setEquipo ] = useState( [] )

    useEffect ( ()=> {
        getAllEquipo()
    }, [])
  
    const getAllEquipo = async () => {
      const response = await axios.get(`${endpoint}/listar-puntos-orden/`)
      setEquipo(response.data)
      //console.log(response.data)
    }
  
      

    
    return (
        <><br/>     
        <div className="row d-flex justify-content-end pt-1" id='stabla-posiciones'>

        <div className="col-md-4">     
              <div className="card p-4">
            <Card.Title>LISTA DE EQUIPOS</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">#campeonato</Card.Subtitle>
            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Nombre del Equipo</th>    
                                        <th>Puntos</th>                                      
                                        </tr>
                                    </thead>

                                    <tbody>
                                      { equipos.map((equipo,index)=>(
                                             <tr key={equipo.id}> 
                                             <td> {index+1} </td> 
                                           <td> {equipo.nombre_equipo} </td> 
                                           <td> {equipo.puntos} </td>    
                                           
                                           </tr>

                                      )
                                      )}
                                        
                                    </tbody>
                                </Table>

            </div>

        </div>

    </div>        
            
                 

{/*------------------------------------------------------*/}
        

      </>
    );
  }

  export default TablaPosiciones;
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Nav,  Navbar, NavDropdown, Card, Table, Container, Row, Col} from "react-bootstrap"

const endpoint = 'http://localhost:8000/api'

const ClasificarPartidos = () => {

    const [ equipos , setEquipo ] = useState( [] )

    useEffect ( ()=> {
        getAllEquipo()
    }, [])
  
    const getAllEquipo = async () => {
      const response = await axios.get(`${endpoint}/listar-equipos/`)
      setEquipo(response.data)
      //console.log(response.data)
    }

    const navigate = useNavigate()
    const [partido, setPartido]=React.useState({equipo1:"", equipo2:"", fecha:"", hora:""});

    async function guardarPartido(){
        const res = await axios.post("http://localhost:8000/api/add-partidos", partido);
        console.log(res);
        navigate('/listar-partidos')
    }

    
    return (
        <><br/>
         <div className="modal-header justify-content-center">
        <h3 className="modal-title font-weight-bolder text-white" id="exampleModalLabel"><i class="fas fa-network-wired"></i> Rol de Partidos </h3>
        </div>
    <Container>
        <Row>
            <Col>
                <Card style={{ width: '30em' }}>
                    <Card.Body>
                        <Card.Title>LISTA DE EQUIPOS</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Habilitados</Card.Subtitle>
                        <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Nombre del Equipo</th>    
                                                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                      { equipos.map((equipo,index)=>(
                                             <tr key={equipo.id}> 
                                             <td> {index+1} </td> 
                                           <td> {equipo.nombre_equipo} </td> 
                                              
                                           
                                           </tr>

                                      )
                                      )}
                                        
                                    </tbody>
                                </Table>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
            <br></br><br></br><br></br><br></br>
                <Card>
                    <Card.Body>
                                <table className="col-md-8">
                                    <tbody>
                                    <tr>
                                        <th className="text-right font-italic">Equipo Local :</th>
                                        <td className="border-bottom border-dark">
                                            <input  value={partido.equipo1} onChange={(e)=>{setPartido({...partido,equipo1:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="nameJuez" id="nombre" placeholder="Ingrese su Nombre" required></input>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-right font-italic" >Equipo Visitante :</th>
                                        <td className="border-bottom border-dark" >
                                            <input  value={partido.equipo2} onChange={(e)=>{setPartido({...partido,equipo2:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="apellidoJuez" id="apellido" placeholder="Ingrese sus Apellidos" required></input>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-right font-italic" >Hora :</th>
                                        <td className="border-bottom border-dark" >
                                            <input  value={partido.hora} onChange={(e)=>{setPartido({...partido,hora:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="ci" id="documento" placeholder="Ingrese su Documento" required></input>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-right font-italic" >Fecha :</th>
                                        <td className="border-bottom border-dark" >
                                            <input  value={partido.fecha} onChange={(e)=>{setPartido({...partido,fecha:e.target.value})}} type="text" className="form-control form-control-sm border-0" name="ci" id="documento" placeholder="Ingrese su Documento" required></input>
                                            
                                        </td>
                                    </tr>
                                    
                                    </tbody>
                                </table>    
                                
                                <div className="modal-footer">
                                            <tbody>
                                            <tr>
                                               
                                                <th><Link to={`/`} className="btn btn-secondary btn-sm me-md-2">Cancelar</Link></th>
                                                    
                                                <td><button className='btn btn-secondary btn-sm' onClick={guardarPartido} > Registrar</button></td>
                                            </tr> 
                                            </tbody>   
                                    </div>    
                    </Card.Body>
                </Card>             
            </Col>
        </Row>
         
    </Container>
{/*------------------------------------------------------*/}
        

      </>
    );
  }

  export default ClasificarPartidos;
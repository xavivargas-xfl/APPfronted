import { useState } from "react";
import AuthUser from './AuthUser';
import { Link } from 'react-router-dom';


export function Login() {
  const {http,setToken} = AuthUser();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const submitForm = () =>{
      console.log(email+' '+password);
      http.post('/login',{email:email,password:password}).then((res)=>{
          setToken(res.data.user,res.data.access_token);
      })
    
  }

    return (
      <>
      <div className="row justify-content-center pt-1">
      <div className="col-md-4" style={{background:"black"}}>     
        <form className="px-4 py-3" style={{background:"black"}}>
            <div className="form-group">
              <h1 style={{color:"orange", textAlign:"center"}}>INICIAR SESION</h1><br/>
              <label style={{color:"white"}}>Correo Electronico</label>
              <input onChange={(e)=>setEmail(e.target.value)}
              type="email" className="form-control" id="correo"
              placeholder="email@example.com" required></input>

            </div>
            <div className="form-group">
              <label style={{color:"white"}}>Contraseña</label>
              <input onChange={(e)=>setPassword(e.target.value)}
              type="password" className="form-control" id="contraseña"
              placeholder="Password"></input>
            </div>
            <button onClick={submitForm} type="button" className="btn btn-primary">Entrar</button>
            <nav>
              <Link to="recuperar">¿Olvidaste tu contraseña?</Link><br></br>             
            </nav>
            
        </form>
        
        <div className="dropdown-divider"></div>
          
        </div>
        </div>
</>   
);
}
export default Login;
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
      <br></br>
      
          <div className="row d-flex justify-content-center pt-1">
            <div className="col-md-4">     
              <div className="card p-4">
              <h1 className="text-center mb-3">Iniciar Secion </h1>

                  <div className="form-group">
                    
                    <label >Correo Electronico</label>
                    <input onChange={(e)=>setEmail(e.target.value)}
                    type="email" className="form-control" id="correo"
                    placeholder="email@example.com" required></input>
                  </div>

                  <div className="form-group">
                    <label >Contraseña</label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                    type="password" className="form-control" id="contraseña"
                    placeholder="Password"></input>
                  </div>

                  <button onClick={submitForm} type="button" className="btn btn-secondary mt-4">Entrar</button>
                  <nav>
                    <Link to="recuperar">¿Olvidaste tu contraseña?</Link><br></br>             
                  </nav>
                  
              </div>
              
              <div className="dropdown-divider"></div>
                
              </div>
            </div>
        
</>   
);
}
export default Login;
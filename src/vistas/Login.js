import { useState } from "react";
import AuthUser from './AuthUser';
import { Link } from 'react-router-dom';


export function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const submitForm = () =>{
        console.log(email+' '+password);
        http.post('login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    
    }

    return (
        <div className="row justify-content-center pt-1">
            <div className="col-sm-4">
                <div className="card p-4">
                    <h1 className="text-center mb-3">INICIAR SESION</h1>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={(e)=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={(e)=>setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <br></br>
                    <button type="button" onClick={submitForm} className="btn btn-secondary mt-4">Entrar</button>
                    <nav>
                        <Link to="recuperar">¿Olvidaste tu contraseña?</Link><br></br>             
                    </nav>
                </div>
            </div>
        </div>  
);
}
export default Login;
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [password_confirmation,setPasswordConfirmation] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{name:name,email:email,password:password,password_confirmation:password_confirmation}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div className="row justify-content-center pt-1">
            <div className="col-sm-6">
                <div className="card p-4">

                    <h1 className="text-center mb-3">Registrarse </h1>

                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            onChange={e=>setName(e.target.value)}
                        id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password confirmation:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        id="pwd_confirmation" />
                    </div>

                    <button type="button" onClick={submitForm} className="btn btn-secondary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}
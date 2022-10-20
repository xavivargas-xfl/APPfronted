import * as React from "react";
import "./App.css";
import Usuario from './vistas/Usuario';
import Home from './vistas/Home';
import AuthUser from './vistas/AuthUser';


function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Home />
  }
  return (
      <Usuario />
  );
}

export default App;
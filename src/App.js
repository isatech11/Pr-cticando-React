import React from "react";
import Card from "./components/Card";
import './style/App.css'


export function App() {
  return (
   <div className="Container"> 
      <Card titulo="Componentes Vs Elementos"  descripcion="Curso Introducción a React.Js"  />
      <Card titulo="Aprende con Sonic"  descripcion="Curso Introducción a la velocidad"/>
      <Card titulo="Juega con sonic"  descripcion="Speed"/>
      <Card titulo="Nivel 1"  descripcion="React.Js"/>
      </div>
     
   
  );
}


// export default App;
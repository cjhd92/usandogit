import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Proyectos } from "./components/proyectos/Proyectos";

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from "./context/tareas/tareaState";

function App() {
  return (

    <ProyectoState>

      <TareaState>
        <Router>
          <div>

            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/nueva-cuenta" element={<NuevaCuenta />} />
              <Route exact path="/proyectos" element={<Proyectos />} />


            </Routes>
          </div>


        </Router>
      </TareaState>

    </ProyectoState>

  );
}

export default App;

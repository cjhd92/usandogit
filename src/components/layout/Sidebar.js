import React from 'react';
import { Listado } from '../proyectos/Listado';
import { NuevoProyecto } from '../proyectos/NuevoProyecto';



export const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Task</span></h1>

            
            <NuevoProyecto/>

            <div className="proyect">
                <h2>Tus Proyectos</h2>

                <Listado/>
            </div>


        </aside>
    )
}

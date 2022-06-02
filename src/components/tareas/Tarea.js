import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
//import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


export const Tarea = ({ tarea }) => {

    

    const tareasContext = useContext(TareaContext)
    const {tareas, tareaseleccionada, eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    console.log(" la tarea seleccionada",tareaseleccionada);
    
    // funcion que se ejecuta al darle al boton eliminar
    const tareaEliminar = (id) => {
        console.log("id tarea",id);
        eliminarTarea(id);
        obtenerTareas(proyecto[0].id)
        console.log(" las tareas restantes",tareas);
    }


    const cambiarEstado = (tarea) => {
        console.log(tarea);

        if(tarea.estado){
            tarea.estado= false
        }
        else
        tarea.estado= true
        console.log(tarea);
        cambiarEstadoTarea(tarea)
    }

    const seleccionarTarea = (tarea) => {
        guardarTareaActual(tarea)
    }


    //console.log(tarea);
    return (

        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            <div className='estado'>
                {tarea.estado
                    ?
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={() => cambiarEstado(tarea)}> Completo</button>
                    )

                    :
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() => cambiarEstado(tarea)}> Incompleto</button>
                    )
                }

            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}> Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea.id)}> Eliminar</button>

            </div>

        </li>
    )
}

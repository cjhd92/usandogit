import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import { Tarea } from './Tarea'

export const ListadoTareas = () => {

    //Obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;


        //obtener las tareas del proyectos
        const tareasContext = useContext(TareaContext)
        const {tareasproyecto } = tareasContext;

    if (!proyecto) return <h2>Seleccione un proyecto</h2>



    const [proyectoActual] = proyecto;
    const { nombre, id } = proyectoActual





   // const tareasProyectos = []


    //Elimina el proyecto activo
    const onClickEliminar = () =>{
        eliminarProyecto(id)
    }

    return (
        <>
            <h2>Proyecto: {nombre} </h2>

            <ul className='listado-tareas'>
                {tareasproyecto.length === 0
                    ? (<p className='tareas'>No hay tareas</p>)
                    : tareasproyecto.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea} />
                    ))}

            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={() => onClickEliminar()}>Eliminar Proyecto &times;</button>
        </>

    )
}

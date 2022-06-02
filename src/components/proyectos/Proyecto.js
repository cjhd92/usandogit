import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

export const Proyecto = ({proyecto}) => {

        //Obtener el state del proyecto
        const proyectosContext = useContext(proyectoContext)
        const {proyectoActual } = proyectosContext;

        //obtener el state de las tareas
        const tareasContext = useContext(TareaContext)
        const {obtenerTareas } = tareasContext;

        //funcion que agrega el proyecto actual y sus tareas
        const seleccionarProyecto = (id)=>{
            proyectoActual(id);//Fijar un proyecto actual
            obtenerTareas(id);

        }
    return (
      
        <li>
            <button
                    type='button'
                    className='btn btn-blank'
                    onClick={() =>seleccionarProyecto(proyecto.id) }>
                {proyecto.nombre}
            </button>
        </li>
    )
}

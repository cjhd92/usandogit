import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';



export const FormTarea = () => {



    //Obtener el state del proyecto si esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;
 

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext)
    const { tareaseleccionada, tareasproyecto, errorTarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea } = tareasContext;

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ""
    })

    const { nombre } = tarea;

    //Detecta si hay una tarea a editar
    useEffect(() => {
        if(tareaseleccionada != null){
            guardarTarea(tareaseleccionada)
        }

        else{
            guardarTarea({
                nombre:""
            })
        }
     
    }, [tareaseleccionada])

    if (!proyecto) return null

    const [proyectoActual] = proyecto;
    const { id } = proyectoActual
    //console.log("proyectoActual",proyectoActual);

    const handleChange = (e) => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();


        //validar 
        if (nombre.trim() == "") {
            validarTarea();
           // console.log("yyy", errorTarea);
            return;
        }

   

        if(tareaseleccionada == null){
     //agregar la nueva tarea al state de tareas
     tarea.proyectoId=id;
     tarea.estado = false
     agregarTarea(tarea)
        }

        else{
            //actualizar tarea existente
            actualizarTarea(tarea)
        }

   


        //Obtener la tarea
        obtenerTareas(id )
        console.log("aaa",tareasproyecto);

        //Reiniciar el form
        guardarTarea({
       nombre:""
        })

    }

    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange} />

                </div>

                <div className='contenedor-input'>

                    <input
                        type="submit"
                        className='btn btn-primario btn-block'
                        value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />

                </div>
            </form>

            {errorTarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p>
                : null}
        </div>
    )
}

import React, { useState,useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

export const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const {formulario, mostrarFormulario, agregarProyecto, errorFormulario, mostrarError } = proyectosContext;


    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ""
    });

    //Extraer nombre del Proyecto
    const {nombre} = proyecto

    const onChangeProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    } 

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === "") {
            mostrarError();
            return;
        }

        

        //Agregar 
        agregarProyecto(proyecto);




        //Reiniciar el form
        guardarProyecto({
      nombre:""
        })

    }

    return (
     <>
        <button
                 type='button'
                 className='btn btn-block btn-primario'
                 onClick={() => mostrarFormulario()}>
            Nuevo Proyecto
        </button>

        {formulario  
        ?

        (
            <form className='formulario-nuevo-proyecto'
            onSubmit={onSubmitProyecto}> 
            <input
                  type="text"
                  className='input-text'
                  placeholder='Nombre del Proyecto'
                  name='nombre'
                  value={nombre}
                  onChange={onChangeProyecto}/>

             <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value="Agregar Proyecto"/>     
     </form>
        )

        : null

    
    }

    {errorFormulario ?
                       (<p className='mensaje error'>El nombre del proyecto es obligatorio</p>)
                     : null }

       
     </>
     


    )
}

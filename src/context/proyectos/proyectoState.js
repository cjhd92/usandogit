import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid'


import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';





const ProyectoState = props => {

    const proyectos = [
        {id:1, nombre: "Tienda Virtual10"},
        {id:2,nombre: "Tienda Virtual2"},
        {id:3,nombre: "Tienda Virtual3"}
    ]

    const initialState = {
        
    proyectos : [],
    formulario: false,
    errorFormulario:false,
    proyecto:null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    ///Obtener Proyectos
    const obtenerProyectos =() =>{
       dispatch({
           type: OBTENER_PROYECTOS,
           payload: proyectos
       })
    }


    //Agregar nuevo proyecto
   const agregarProyecto = (proyectos) => {
       proyectos.id= uuid();

       //Insertar proyecto
       dispatch({
        type: AGREGAR_PROYECTO,
        payload: proyectos
    })

   }

    //Validar formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: PROYECTO_ERROR,
          
        })
    }

    //Selecciona el proyecto que el usuario dio click
    const proyectoActual = (proyectoId) => {
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId

        })
    }

//Elimina un proyecto
const eliminarProyecto = ( proyectoId ) => {
    dispatch({
        type: ELIMINAR_PROYECTO,
        payload:proyectoId
    })
}


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario:state.formulario,
                errorFormulario:state.errorFormulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;
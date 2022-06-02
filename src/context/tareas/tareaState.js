import React, { useReducer } from "react";
import {v4 as uuid} from 'uuid'
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    TAREA_ACTUAL1,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: "Elegir Plataforma2", estado: true, proyectoId: 2 },
            {id: 2, nombre: "Elegir Plataforma123", estado: false, proyectoId: 1 },
            {id: 3, nombre: "Elegir Plataforma331", estado: true, proyectoId: 3 },
            {id: 4 , nombre: "Elegir Plataforma144", estado: false, proyectoId: 1 },
            {id: 5, nombre: "Elegir Plataforma1", estado: true, proyectoId: 1 },
            {id: 6, nombre: "Elegir2 ", estado: true, proyectoId: 2 },
            {id: 7, nombre: " Plataforma3", estado: true, proyectoId: 3 },
            {id: 8, nombre: "Elegir Plataforma12", estado: false, proyectoId: 1 },
            {id: 9, nombre: "Elegir Plataforma22", estado: true, proyectoId: 2 },
            {id: 10, nombre: "Elegir Plat33333", estado: false, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errorTarea:false,
        tareaseleccionada:null
    }


    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(tareaReducer, initialState)


    //Crear las funciones

    //Obtener las tareas de un proyecto

    const obtenerTareas = (proyectoId) => {
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyectoId
        })
    }

    const agregarTarea = (tarea) => {
       tarea.id= uuid();
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }

    const validarTarea = () =>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    const eliminarTarea = (id) =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }



//Cambia el estado de la tarea
const cambiarEstadoTarea = tarea => {
    dispatch({
        type: TAREA_ACTUAL,
        payload:tarea
    })
}

//Extrae una tarea para edicion
const guardarTareaActual = (tarea) => {
    dispatch({
        type: TAREA_ACTUAL1,
        payload:tarea
    })
}


//Edita o modifica una tarea

const actualizarTarea = tarea => {
    dispatch({
        type: ACTUALIZAR_TAREA,
        payload:tarea
    })
}

    return (
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errorTarea:state.errorTarea,
                tareaseleccionada:state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>

    )
}


export default TareaState
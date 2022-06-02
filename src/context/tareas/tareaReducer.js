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


export default (state, action) => {
    switch(action.type){


        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto:state.tareas.filter((tarea) => tarea.proyectoId === action.payload)

            }

        case AGREGAR_TAREA:
            return{
                ...state,
                tareas:[action.payload ,...state.tareas],
                errorTarea:false
            }    
        case VALIDAR_TAREA:
            return{
                ...state,
                errorTarea:true
               
            }    

            case ELIMINAR_TAREA:
            return{
                ...state,
              tareas:state.tareas.filter(tarea => tarea.id !== action.payload )
               
            }    
            case TAREA_ACTUAL:
            return{
                ...state,
                tareas: state.tareas.map((tarea) => tarea.id === action.payload.id ? action.payload : tarea)
              
               
            }   
            
            case TAREA_ACTUAL1:
                return{
                    ...state,
                    tareaseleccionada:action.payload

                } 
            case ACTUALIZAR_TAREA:
                return{
                    ...state,
                    tareas: state.tareas.map((tarea) => tarea.id === action.payload.id ? action.payload : tarea),
                    tareaseleccionada:null


                } 



        default:
            return state;
    }
}
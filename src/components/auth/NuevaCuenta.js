import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {

    const [usuario,guardarUsuario] = useState({
        nombre  : "",
        email   : "",
        password: "",
        confirmar: ""
    });
    
    const {nombre, email, password, confirmar } = usuario;

    const onChange = (e) =>{

        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.prevenDefault();

        //validacion campos 

        //Password de 6 caracteres como minimo

        //Los password sean iguales 

        //Pasarlo al action
    }    

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>

                <h1>Obtener una cuenta</h1>

                <form
                         onSubmit={onSubmit}>

                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                                type="text"
                                id='nombre'
                                name='nombre'
                                placeholder='Tu Nombre'
                                value={nombre}
                                onChange={onChange}/>
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='Tu Email'
                                value={email}
                                onChange={onChange}/>
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                                type="password"
                                id='password'
                                name='password'
                                placeholder='Tu password'
                                value={password}
                                onChange={onChange}/>
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                                type="password"
                                id='confirmar'
                                name='confirmar'
                                placeholder='Repite tu password'
                                value={confirmar}
                                onChange={onChange}/>
                    </div>


                    <div className='campo-form'>
                            <input
                                   type="submit"
                                   className='btn btn-primario btn-block'
                                   value="Registrarme"/>
                    </div>
                </form>

                <Link to={"/"}
                      className="enlace-cuenta"> Volver a iniciar sesion </Link>
            </div>
        </div>
    )
}

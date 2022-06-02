import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    const [usuario,guardarUsuario] = useState({
        email   : "",
        password: ""
    });
    
    const { email, password } = usuario;

    const onChange = (e) =>{

        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.prevenDefault();

        //validacion campos 

        //Pasarlo al action
    }    

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>

                <h1>Iniciar Sesion1234RamaPrueba</h1>

                <form
                         onSubmit={onSubmit}>
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
                            <input
                                   type="submit"
                                   className='btn btn-primario btn-block'
                                   value="Iniciar Sesion"/>
                    </div>
                </form>

                <Link to={"/nueva-cuenta"}
                      className="enlace-cuenta"> Obtener Cuenta </Link>
            </div>
        </div>
    )
}

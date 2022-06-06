import React from 'react';
import '../../Components/Styles/styleslogin.css';

import UTFPRLOGO from '../../Assets/utfpr-logo.png'

const Login = () => {
    return (
        <>
            <div id="login-wrapper">
                    <logo>
                       <img className='logo-image' src={UTFPRLOGO} alt=""/>
                    </logo> 
                <p className='title-app'>LOGIN PRROFESSORES</p>
                <div className='login-box'>
                    <input type="text" placeholder='LOGIN'></input>
                    <input type="password" placeholder='SENHA'></input>
                    <div className='click'>
                        <button type='submit'>ENTRAR</button>
                        <a href="/">
                            <button>VOLTAR</button>
                        </a>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Login;
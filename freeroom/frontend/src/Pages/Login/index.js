import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <>
            <div id="login-wrapper">
                <p>Login</p>
                <div className='login-box'>
                    <input type="text" placeholder='seu username'></input>
                    <input type="password" placeholder='sua senha'></input>
                    <button>ENTRAR</button>
                </div>
            </div>
        </>
    )
}

export default Login;
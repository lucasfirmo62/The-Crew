import React from 'react';
import './styles.css';
import Footer from '../../Components/Footer';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'

const Login = () => {
    return (
        <>
            <div id="login-wrapper">
                <a href="/"><img className='logo-image' src={UTFPRLOGO} alt=""/></a>
                <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                <div className='login-box'>
                    <input type="text" placeholder='RA'></input>
                    <input type="password" placeholder='senha'></input>
                    <div className='click'>
                        <button type='submit'>ENTRAR</button>
                        <a href="/">
                            <button>VOLTAR</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login;
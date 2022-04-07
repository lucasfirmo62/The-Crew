import React from 'react';
import Home from '../Home'
import './styles.css';
import Footer from '../../Components/Footer';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'

const Login = () => {
    return (
        <>
            <div id="login-wrapper">
                <img className='logo-image' src={UTFPRLOGO} alt=""/>
                <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                <form className='login-box'>
                    <input type="text" placeholder='RA'></input>
                    <input type="password" placeholder='senha'></input>
                    <div className='click'>
                        <button>ENTRAR</button>
                        <a href={Home}>
                            <button>VOLTAR</button>
                        </a>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Login;
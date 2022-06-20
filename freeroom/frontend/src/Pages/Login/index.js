import React, { useEffect, useState, useHistory, useContext } from 'react';
import '../../Components/Styles/styleslogin.css';
import Footer from '../../Components/Footer';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import api from '../../api';

import { AuthContext } from '../../Context/auth';

const Login = () => {

    const [user, setUser] = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginOption, setLoginOption] = useState(1);

    async function handleLogin(e) {
        e.preventDefault();

        switch (loginOption) {
            case '1':
                const data = {
                    ra: email,
                    senha: password
                }

                try {
                    const info_data = await api.post('/professor/autenticar', data);

                    localStorage.setItem('user', JSON.stringify(info_data.data.tokenAcesso))

                    setUser({ auth: true })

                    window.location.replace("/pa");
                    
                } catch (err) {
                    alert('Falha no login, tente novamente.');
                }

                break;
            default:
                alert('Falha no login, tente novamente.');
        }
    }

    return (
        <>
            <form id="login-wrapper" onSubmit={handleLogin}>
                <logo>
                    <img className='logo-image' src={UTFPRLOGO} alt="" />
                </logo>
                <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                <div className='login-box'>
                    <input
                        placeholder='Email'
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder='senha'
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className='click'>
                        <button
                            type="submit"
                            value={1}
                            onClick={(e) => setLoginOption(e.currentTarget.value)}
                            className="login-btn"
                        >
                            ENTRAR
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Login;
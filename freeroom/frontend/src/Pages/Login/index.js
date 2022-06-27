import React, { useState, useContext } from 'react';
import '../../Components/Styles/styleslogin.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { removeQuote } from '../../assistant';
import api from '../../api';

import { AuthContext } from '../../Context/auth';

const Login = () => {

    const [user, setUser] = useContext(AuthContext);

    var userVerify = removeQuote(localStorage.getItem('user'));

    console.log(userVerify)

    if(userVerify.length > 10){
        window.location.replace("/pa");
    }


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

                    localStorage.setItem('user', JSON.stringify(info_data.data.tokenAcesso));

                    setUser({ auth: true })
                    
                    localStorage.setItem('IdUser', JSON.stringify(info_data.data.usuario.id));
                    localStorage.setItem('nameUser', JSON.stringify(info_data.data.usuario.nome));
                    
                } catch (err) {
                    alert('Falha no login, tente novamente.');
                }

                break;
            default:
                alert('Falha no login, tente novamente.');
        }
    }

    return (
        <body id="login-wrapper">
            <img className='logo-image' src={UTFPRLOGO} />
            <form onSubmit={handleLogin}>
                <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                <div className='login-box'>
                    <center>
                        <p>Acesso do professor</p>
                    </center>
                    <input
                        placeholder='ra'
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
                        >
                            ENTRAR
                        </button>
                    </div>
                </div>
            </form>
        </body>
    )
}

export default Login;
import React from 'react';
import '../../Components/Styles/stylespa.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
import Footer from '../../Components/Footer2';

const Home = () => {
    return (
        <>

        <body>
            <nav>
                <div id="home-wrapper-content">
                    <logo>
                       <img className='logo-image' src={UTFPRLOGO} alt=""/>
                    </logo> 
                    <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                    <div className='login-box'>
                        <input type="text" placeholder='Bloco'></input>
                        <input type="text" placeholder='ID da sala'></input>
                        <input type="text" placeholder='Horario'></input>
                        <div className='click'>
                            <button type='submit'>SUBMIT</button>
                            <a href="/">
                                <button>VOLTAR</button>
                            </a>
                        </div>
                    </div>

                    <center>

                    </center>
                </div>
            </nav>
        </body>
            <Footer/>
        </>
    )
}

export default Home;
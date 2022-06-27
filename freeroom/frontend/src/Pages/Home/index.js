import React from 'react';
import '../../Components/Styles/styleshome.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { BiUserCircle } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { removeQuote } from '../../assistant';

const Home = () => {
    var userVerify = removeQuote(localStorage.getItem('user'));

    if(userVerify.length > 10){
        window.location.replace("/pa");
    }

    return (
        <center>
            <div id="home-wrapper">
                <div className="buttons">
                    <div className='header-line'>
                        <img className='logo-image-home' src={UTFPRLOGO} alt="" />
                    </div>
                    <div id="text-1">
                        <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                    </div>
                    <div className='buttons-content'>
                        <div className='but-crossover'>
                            <a href='/login'>
                                <div className='buttons-home'>
                                    <BiUserCircle className='icon' />
                                    <p className='title-app'>Professores</p>
                                </div>
                            </a>
                        </div>
                        <div className='but-crossover'>
                            <a href='/rooms'>
                                <div className='buttons-home'>
                                    <GrView className='icon' />
                                    <p className='title-app'>Mapa salas</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Home;
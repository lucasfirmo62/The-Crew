import React from 'react';
import '../../Components/Styles/styleshome.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { BiUserCircle } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import Footer from '../../Components/Footer2'

const Home = () => {
    return (
        <>
            <div id="home-wrapper">
                <logo>
                <img className='logo-image' src={UTFPRLOGO} alt=""/>
                </logo>

                <div id = "text-1">
                    <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                </div>
                
                <center>
                    <div className='buttons-content'>
                        <buton1>
                        <a href='/login'>
                            <div className='button'>
                                <BiUserCircle className='icon'/>
                                <p className='title-app'>Professores</p>
                            </div>
                        </a>
                        </buton1>
                        <a href='/rooms'>
                            <div className='button'>
                                <GrView className='icon'/>
                                <p className='title-app'>Mapa salas</p>
                            </div>
                        </a>
                    </div>
                </center>
            </div>
            
        </>
    )
}

export default Home;
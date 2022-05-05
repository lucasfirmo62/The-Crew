import React from 'react';
import './styles.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import Footer from '../../Components/Footer2'

const Home = () => {
    return (
        <>
            <div id="home-wrapper-content">
                <img className='logo-image' src={UTFPRLOGO} alt=""/>
                <p className='title-app'>Professores</p>
                <center>
                    <div className='buttons-content'>
                        <a href='/pa'>
                            <div className='button'>
                                <AiOutlineClockCircle className='icon'/>
                                <p className='title-app'>Agendar PA</p>
                            </div>
                        </a>
                        <a href='/rooms'>
                            <div className='button'>
                                <GrView className='icon'/>
                                <p className='title-app'>Mapa salas</p>
                            </div>
                        </a>
                    </div>
                </center>
            </div>
            <Footer/>
        </>
    )
}

export default Home;
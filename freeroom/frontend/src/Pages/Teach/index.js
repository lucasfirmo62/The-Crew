import React from 'react';
import '../../Components/Styles/stylesteach.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import Footer from '../../Components/Footer2'

const Home = () => {
    return (
        <>
            <div id="home-wrapper-content">
                    <logo>
                       <img className='logo-image' src={UTFPRLOGO} alt=""/>
                    </logo> 
                <p className='title-app'>Professores</p>
                <center>
                    <div className='buttons-content'>
                        <butom1>
                        <a href='/pa'>
                            <div className='button'>
                                <AiOutlineClockCircle className='icon'/>
                                <p className='title-app'>Agendar PA</p>
                            </div>
                        </a>
                        </butom1>
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
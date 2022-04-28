import React from 'react';
import './styles.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png'
import { BiUserCircle } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import Footer from '../../Components/Footer2'

const Home = () => {
    return (
        <>
            <div id="home-wrapper">
                <img className='logo-image' src={UTFPRLOGO} alt=""/>
                <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                <center>
                    <div className='buttons-content'>
                        <a href='/login'>
                            <div className='button'>
                                <BiUserCircle className='icon'/>
                            </div>
                        </a>
                        <a href='/rooms'>
                            <div className='button'>
                                <GrView className='icon'/>
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
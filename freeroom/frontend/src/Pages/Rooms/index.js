import React, { useEffect, useState } from 'react';
import '../../Components/Styles/stylesrooms.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
import CardRoom from '../../Components/CardRoom';
import { roomVerify, go, removeQuote, exitAccount } from '../../assistant';


const Rooms = () => {
    const [room, setRooms] = useState([{}]);

    var userVerify = removeQuote(localStorage.getItem('user'));

    var painelUser;

    if (userVerify.length > 10) {
        painelUser = <div className='user-info'>
            <p>Olá, {removeQuote(localStorage.getItem('nameUser'))}</p>
            <p onClick={() => go('rooms')} className='click'>Mapa de salas</p>
            <p onClick={() => go('pa')} className='click'>Agendar</p>
            <p onClick={() => go('my-rooms')} className='click'>Minhas salas</p>
            <exit onClick={userVerify = exitAccount}>Sair</exit>
        </div>
    }


    useEffect(() => {
        const url = `http://localhost:3000/sala/mostrar`;
        fetch(url)
            .then(response => response.json())
            .then(async (data) => {
                setRooms(await data);
            })
    }, [])

    var insiderCrown = window.location.href.replace('http://localhost:3001/room/', '');
    var setBlock

    if (insiderCrown.length >= 27) {
        setBlock = insiderCrown.slice(insiderCrown.length - 1, insiderCrown.length);
        console.log(setBlock)
    }



    var render = room.map((roomSolo, index) => (
        <div className="list-item">
            {(roomVerify(setBlock, roomSolo.id_sala) === true) ?
                <CardRoom
                    room={roomSolo}
                />
                : null}
        </div>
    ));

    function selectBlock() {
        var block = document.getElementById("select-block").value;
        window.location.replace('http://localhost:3001/rooms/' + block);
    }

    return (

        <div id="rooms-wrapper-content">
            <>
                <backg>


                    <logo>
                        <img className='logo-image' src={UTFPRLOGO} alt="" />
                    </logo>

                    {painelUser}

                    <test>
                        <div className='select-content-options-room'>
                            <center>

                                <div id="test">
                                    <p>Selecione o Bloco</p>
                                </div>

                                <div className='bar-search-block'>
                                    <select id='select-block' className='select-options-rooms'>
                                        <option value="B">Bloco B</option>
                                        <option value="C">Bloco C</option>
                                        <option value="D">Bloco D</option>
                                        <option value="E">Bloco E</option>
                                        <option value="F">Bloco F</option>
                                        <option value="G">Bloco G</option>
                                        <option value="H">Bloco H</option>
                                    </select>

                                    <button className='ajust-bt' onClick={selectBlock} >
                                        PROCURAR
                                    </button>
                                </div>

                            </center>
                        </div>

                        <div className='content-painel'>
                            <center>
                                {render}
                            </center>
                        </div>
                    </test>

                </backg>

            </>
        </div>
    )
}

export default Rooms;
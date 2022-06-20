import React, { useEffect, useState } from 'react';
import '../../Components/Styles/stylespa.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
import Footer from '../../Components/Footer2';
import { daySelect, verifyHorary, usageVerify } from '../../assistant';
import api from '../../api';


const Home = () => {

    const [room, setRooms] = useState([{}]);
    const [horary, setHorary] = useState([{}]);
    const [tableHorary, setTableHorary] = useState([{}]);

    var valueBlock;
    var valueRoom;
    var valueDay;
    var roomSearch;
    var usage = [];
    var insiderDay;
    var textRoom;

    var insiderSearch = window.location.href.replace('http://localhost:3001/pa/', '');

    if (insiderSearch.length === 24) {
        textRoom = "Escolha as opções a cima e pesquise."
    } else {
        insiderDay = insiderSearch.slice(4, 9)
        insiderSearch = insiderSearch.slice(0, 4);
        textRoom = "Horários livre da sala " + insiderSearch + " - " + daySelect(insiderDay);
    }

    useEffect(() => {
        const url = `http://localhost:3000/horario/mostrar`;
        fetch(url)
            .then(response => response.json())
            .then(async (data) => {
                setHorary(await data);
            })
    }, [])

    useEffect(() => {
        const url = `http://localhost:3000/sala/mostrar`;
        fetch(url)
            .then(response => response.json())
            .then(async (data) => {
                setRooms(await data);
            })
    }, [])

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/lucasfirmo62/The-Crew/main/freeroom/frontend/src/Assets/horary.json`;
        fetch(url)
            .then(response => response.json())
            .then(async (data) => {
                setTableHorary(await data);
            })
    }, [])

    function searchRoom() {
        valueBlock = document.getElementById("select-block").value;
        valueRoom = document.getElementById("select-room").value;
        valueDay = document.getElementById("select-day").value;
        roomSearch = valueBlock + valueRoom + valueDay;
        window.location.replace("http://localhost:3001/pa/" + roomSearch)
    }

    for (var o in horary) {
        if ((horary[o].salaId === verifyHorary(insiderSearch, room)) && (horary[o].dia_da_semana === insiderDay)) {
            usage.push(horary[o].horario)
        }
    }

    async function setReservation(id) {
        const data = {
            diaReserva: insiderDay,
            hora: id,
            professorId: 1,
            salaId: 1
        }

        var token = localStorage.getItem('user');

        token = token.slice(1, token.length - 1)

        console.log(token)

        console.log(data)
        
        api.post('/horario/criar', data, { headers: { "Authorization" : `Bearer ${token}` } })

        alert(`${insiderSearch} em ${id} para ${daySelect(insiderDay)} agendado com sucesso`);

        window.location.reload();
    }


    const NoUsageHorary = () => (
        (insiderSearch) ? tableHorary.map(horaryTableSolo =>
            <div className="list-item">
                {(horaryTableSolo.horario === usageVerify(horaryTableSolo.horario, usage)) ?
                    null
                    :
                    <>
                        <input className='selectCardRoom' type="checkbox" onClick={() => setReservation(horaryTableSolo.horario)} />
                        <label>
                            <div className="cardPA">
                                <div className="nameRoom">
                                    <p>{horaryTableSolo.horario}</p>
                                </div>
                                <div className="statusRoom">
                                    <p>Livre</p>
                                </div>
                            </div>
                        </label>
                    </>
                }
            </div>
        ) : null
    )


    return (
        <>

            <body>
                <nav>
                    <div id="pa-wrapper-content">
                        <logo>
                            <img className='logo-image' src={UTFPRLOGO} alt="" />
                        </logo>
                        <p className='title-app'>Mapeamento de Salas do Campus Campo Mourao</p>
                        <div className='login-box'>

                            <div className='options-pa'>
                                <div id="test" className='content-option'>
                                    <select id='select-block' className='select-options'>
                                        <option value="0">Bloco</option>
                                        <option value="B">Bloco B</option>
                                        <option value="C">Bloco C</option>
                                        <option value="D">Bloco D</option>
                                        <option value="E">Bloco E</option>
                                        <option value="F">Bloco F</option>
                                        <option value="G">Bloco G</option>
                                        <option value="H">Bloco H</option>
                                    </select>
                                </div>

                                <div id="test" className='content-option'>
                                    <select id='select-room' className='select-options'>
                                        <option value="0">Sala</option>
                                        <option value="001">001</option>
                                        <option value="002">002</option>
                                        <option value="003">003</option>
                                        <option value="004">004</option>
                                        <option value="005">005</option>
                                        <option value="006">006</option>
                                        <option value="007">007</option>
                                        <option value="101">101</option>
                                        <option value="102">102</option>
                                        <option value="103">103</option>
                                        <option value="104">104</option>
                                        <option value="105">105</option>
                                        <option value="106">106</option>
                                        <option value="107">107</option>
                                    </select>
                                </div>

                                <div id="test" className='content-option'>
                                    <select id='select-day' className='select-options'>
                                        <option value="0">Dia da semana</option>
                                        <option value="seg">Segunda-Feira</option>
                                        <option value="ter">Terça-Feira</option>
                                        <option value="qua">Quarta-Feira</option>
                                        <option value="qui">Quinta-Feira</option>
                                        <option value="sex">Sexta-Feira</option>
                                        <option value="sab">Sábado</option>
                                    </select>
                                </div>

                                <div id="test" className='content-option'>
                                    <button onClick={searchRoom}>
                                        Procurar
                                    </button>
                                </div>

                            </div>

                            <center>

                                <div className='colage'>

                                    <p>{textRoom}</p>

                                    <center>

                                        <NoUsageHorary />

                                        <button>
                                            Confirmar
                                        </button>

                                    </center>

                                </div>
                            </center>


                        </div>
                    </div>
                </nav>
            </body>
            <Footer />
        </>
    )
}

export default Home;
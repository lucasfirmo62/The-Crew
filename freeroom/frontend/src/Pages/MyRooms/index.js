import React, { useEffect, useState } from 'react';
import '../../Components/Styles/stylesMyRooms.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
import { daySelect, removeQuote, idRoom, go, exitAccount } from '../../assistant';
import api from '../../api';


const Home = () => {

    const [room, setRooms] = useState([{}]);
    const [horary, setHorary] = useState([{}]);

    var userVerify = removeQuote(localStorage.getItem('user'));
    var userID = localStorage.getItem('IdUser');
    var token;

    if (userVerify.length < 10) {
        window.location.replace("/login");
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

    async function setDeleteHorary(idDeleteRoom) {
        console.log(idDeleteRoom)
        const data = {
            id: idDeleteRoom
        }

        token = removeQuote(localStorage.getItem('user'))

        api.delete('/horario/deletar', {
            data,
            headers: { "Authorization": `Bearer ${token}` } 
        })

        console.log(token)

        alert(`Horário removido com sucesso`);

        window.location.reload();
    }

    const UserRooms = () => (
        horary.map(horaryTeacher =>
            <div className="list-item">
                {(horaryTeacher.professorId == userID) ?
                    <>
                        <div className="cardPA">
                            <div title="excluir horario" className='remove-horary'  onClick={() => setDeleteHorary(horaryTeacher.id)}>x</div>
                            <div className="nameRoom">
                                <p>{daySelect(horaryTeacher.dia_da_semana)} na {horaryTeacher.horario}</p>
                            </div>
                            <div className="statusRoom">
                                <p>{idRoom((horaryTeacher.salaId), room)}</p>
                            </div>
                        </div>
                    </>
                    :
                    null
                }
            </div>
        )
    )


    return (
        <>

            <body>
                <nav>
                    <div id="pa-wrapper-content">
                        <img className='logo-image-pa' src={UTFPRLOGO} alt="" />
                        <p className='title-app'>Mapeamento de Salas do Campus Campo Mourão</p>
                        <div className='user-info'>
                            <p>Olá, {removeQuote(localStorage.getItem('nameUser'))}</p>
                            <p onClick={() => go('rooms')} className='click'>Mapa de salas</p>
                            <p onClick={() => go('pa')} className='click'>Agendar</p>
                            <p onClick={() => go('my-rooms')} className='click'>Minhas salas</p>
                            <exit onClick={token = exitAccount}>Sair</exit>
                        </div>
                        <div className='content-rooms-all'>
                            <center>

                                <div className='colage'>
                                    <p className='text-info-rooms'>Suas salas</p>
                                    <center>
                                        <UserRooms />
                                    </center>

                                </div>
                            </center>


                        </div>
                    </div>
                </nav>
            </body>
        </>
    )
}

export default Home;
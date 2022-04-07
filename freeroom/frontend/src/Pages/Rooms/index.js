import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './styles.css';
import Footer from '../../Components/Footer'

const Rooms = () => {

    const [room, setRooms] = useState([{}]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:3000/sala/mostrar");
            console.log(response.data);
            setRooms(response.data)
        })()
      }, []);

    return (
        <>
            <div id="rooms-wrapper">
                Salas
                {room[0].id_sala}
            </div>
            <Footer/>
        </>
    )
}

export default Rooms;
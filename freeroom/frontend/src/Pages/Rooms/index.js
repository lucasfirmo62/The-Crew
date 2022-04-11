import React, {useEffect, useState} from 'react';
import './styles.css';
import Footer2 from '../../Components/Footer2'
import CardRoom from '../../Components/CardRoom';

const Rooms = () => {

    const [room, setRooms] = useState([{}]);

    useEffect(() => {
        const url = `https://api.npoint.io/e1149d4470d27a417a01`;
        fetch(url)
          .then(response => response.json())
          .then(json => json.results)
          .then(async (data) => {
            setRooms(await data);
          })
      }, [])

    function selectBlock(){
        var valueSelect = document.getElementById("select-block").value;
        alert("Bloco " + valueSelect + " selecionado");
    }

    return (
        <>
            <div id="rooms-wrapper">

                <div className='select-content-options-room'>
                    <center>
                        <p>Selecione o Bloco</p>
                        <select id='select-block' className='select-options-rooms' onChange={selectBlock}>
                            <option value="E">Bloco E</option>
                            <option value="B">Bloco B</option>
                            <option value="C">Bloco C</option>
                        </select>
                    </center>
                </div>

                <div className='content-painel'>
                    <center>
                    {room.map((roomSolo, index) => (
                        <div className="list-item">
                        <CardRoom
                            room={roomSolo}
                        />
                        </div>
                    ))}
                    </center>
                </div>
            </div>
            <Footer2/>
        </>
    )
}

export default Rooms;
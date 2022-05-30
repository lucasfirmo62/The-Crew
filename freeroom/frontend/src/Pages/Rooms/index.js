import React, {useEffect, useState} from 'react';
import '../../Components/Styles/stylesrooms.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
import Footer2 from '../../Components/Footer2'
import CardRoom from '../../Components/CardRoom';

const Rooms = () => {


    
    const [room, setRooms] = useState([{}]);


    useEffect(() => {
        const url = `http://localhost:3000/sala/mostrar`;
        fetch(url)
          .then(response => response.json())
          .then(async (data) => {
            setRooms(await data);
          })
      }, [])

      var render = room.map((roomSolo, index) => (
                    <div className="list-item">
                    <CardRoom
                        room={roomSolo}
                    />
                    </div>
                ));

    function selectBlock(){
        var valueSelect = document.getElementById("select-block").value;
        var block = room.id_sala.substr(0, 1);
        
        render = (room || []).length ? room.map(roomSolo =>
            <div className="list-item">
                {(valueSelect === block) ?
                    <CardRoom
                       room={roomSolo}
                   /> 
                   :
                   null
            }
            </div>
            ):null}

    return (
        <>
        <backg>

            <div id="rooms-wrapper-content">
                <logo>
                    <img className='logo-image' src={UTFPRLOGO} alt=""/>
                </logo> 
                <test>
                    <div className='select-content-options-room'>
                        <center>
                            
                                <div id = "test">
                                    <p>Selecione o Bloco</p>
                                </div>
                            
                            <select id='select-block' className='select-options-rooms' onChange={selectBlock}>
                                <option value="E">Bloco E</option>
                                <option value="B">Bloco B</option>
                                <option value="C">Bloco C</option>
                            </select>
                        
                        </center>
                    </div>

                    <div className='content-painel'>
                        <center>
                        {render}
                        </center>
                    </div>
                </test>
            </div>
        </backg>
           
        </>
    )
}

export default Rooms;
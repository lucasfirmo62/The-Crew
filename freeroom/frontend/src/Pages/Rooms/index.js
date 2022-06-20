import React, {useEffect, useState} from 'react';
import '../../Components/Styles/stylesrooms.css';
import UTFPRLOGO from '../../Assets/utfpr-logo.png';
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
        var insiderSearch = window.location.href.replace('http://localhost:3001/pa/', '');

    }

    return (
        
        <div id="rooms-wrapper-content">
        <>
        <backg>

            
                <logo>
                    <img className='logo' src={UTFPRLOGO} alt=""/>
                </logo> 
                <test>
                    <div className='select-content-options-room'>
                        <center>
                            
                                <div id = "test">
                                    <p>Selecione o Bloco</p>
                                </div>
                            
                            <select id='select-block' className='select-options-rooms' onChange={selectBlock}>
                                <option value="B">Bloco B</option>
                                <option value="C">Bloco C</option>
                                <option value="D">Bloco D</option>
                                <option value="E">Bloco E</option>
                                <option value="F">Bloco F</option>
                                <option value="G">Bloco G</option>
                                <option value="H">Bloco H</option>
                            </select>
                        
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
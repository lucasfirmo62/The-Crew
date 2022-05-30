import React, {useEffect, useState} from 'react';
import './styles.css';
import {GrClose} from 'react-icons/gr';

const CardRoom = ({room}) => {

  const [horary, setHorary] = useState([{}]);
  const [tableHorary, setTableHorary] = useState([{}]);
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  const exit = () => setShowResults(false)

    useEffect(() => {
      const url = `http://localhost:3000/horario/mostrar`;
      fetch(url)
        .then(response => response.json())
        .then(async (data) => {
          setHorary(await data);
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


  var days = { weekday: 'long'};
  var daysWeek = new Date().toLocaleTimeString('pt-br', days);

  var d = new Date();
  var daysHorary = d.getHours() + ":" + d.getMinutes();
  daysHorary = daysHorary.toString();

  var verifyHorary = false;
  var message = "sala desocupada";

  if((daysHorary > "23:00") && (daysHorary < "7:30")){
    message = "sala fechada";
  }

  if(tableHorary){
    var h = 0;
      for(var i in horary){
        if(room.id === horary[h].salaId){
          if(daysWeek.substr(0, 3) === horary[i].dia_da_semana){
              for(var j in tableHorary){
                  if((daysHorary < tableHorary[j].fim) && (daysHorary > tableHorary[j].inicio)){
                      verifyHorary = true;
                      message = "sala ocupada no momento";
                      break;
                  }
              }
          }
          if(verifyHorary === true){
              break;
          }
        }
        h = h + 1;
      }
  }

  const HoraryRoom = () =>(
    <div className='content-horary'>
      <div className='room-table-horary'>
        <div title='sair' className='exit-toggle'>
          <GrClose onClick={exit}/>
        </div>
        <div className='title-room-horary'>
          <p>Sala {room.id_sala}</p>
        </div>
        <div className='horarys'>
          {tableHorary.map((roomHorary, index) => (
            <div className="list-item">
              <div id = "test">                 
              <div className='card-room-horary-self'>
                  <div className='title-room'>
                    <p>{roomHorary.horario}</p>
                  </div>
                  <div className='.staus-room-modal'>
                    <p>Livre</p>
                  </div>
                </div>
              </div>
        </div>
          ))
        }
        </div>
      </div>
    </div>
  )

  
    return (
      <>
        { showResults ? <HoraryRoom /> : null }
      <div onClick={onClick} className='card-room-content'>
        <div className='title-room'>
            <p>Sala {room.id_sala}</p>
        </div>
        <div className='staus-room'>
            <p>{message}</p>
        </div>
        <div className='description-room'>
            <p>{room.descricao}</p>
        </div>
      </div>
      </>
    )
  }
  
export default  CardRoom;
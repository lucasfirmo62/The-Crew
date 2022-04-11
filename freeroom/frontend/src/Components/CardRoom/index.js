import React from 'react';
import './styles.css';

const CardRoom = ({room}) => {
  
    return (
      <div className='card-room-content'>
        <div className='title-room'>
            <p>Sala {room.idFake}</p>
        </div>
        <div className='staus-room'>
            Indisponível no momento
        </div>
        <div className='description-room'>
            <p>{room.descricao}</p>
        </div>
      </div>
    )
  }
  
export default  CardRoom;

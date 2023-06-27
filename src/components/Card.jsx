import React from 'react';
import Draggable from 'react-draggable';
import card from './images/empty_card.webp'

function Card() {
  return (
    <Draggable>
      <div>
        <img className='card'
          src={card}
          alt="card"
        />
      </div>
    </Draggable>
  );
}

export default Card;

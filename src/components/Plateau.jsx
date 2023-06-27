import React from "react";
// component Plateau
// props movie
// import card from './images/empty_card.webp'
// import background from './images/plateau_background.webp'
import plateau from './images/plateau_front.png'
import Card from "./Card";
import { useState } from "react";

function Plateau(){
    const [cardCount, setCardCount] = useState(0); // Start with 0 cards

    const addCard = () => {
        setCardCount(cardCount + 1); // Add a card when the button is clicked
    };

    // Generate an array with cardCount elements, and create a Card for each one
    const cards = Array.from({ length: cardCount }, (_, index) => <Card key={index} />);

    return (
        <div className="plateau">
            {cards}
            <button onClick={addCard}>Add Card</button>
            <img src={plateau} alt="plateau_front" className="centered-image"/>
        </div>
      );
}

export default Plateau;
import React from 'react';
import './styles/card.css';

function Card(props){
    return (
        <div key={props.cardData.id} class="Card">
            <button type="button">delete</button>
            <h3>{props.cardData.title}</h3>
            <p>{props.cardData.content}</p>
        </div>
    )
}

export default Card;
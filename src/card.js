import React from 'react';

function Card(props){
    return (
        <div key={this.props.STORE.allcards.id} class="Card">
            <button type="button">delete</button>
            <h3>{this.props.STORE.allCards.title}</h3>
            <p>{this.props.STORE.allCards.content}</p>
        </div>
    )
}

export default Card;
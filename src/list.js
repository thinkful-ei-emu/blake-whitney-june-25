import React from 'react';
import Card from './card';
import './styles/list.css';

function List (props){
    return (
        <section className="List">
            <header className="List-cards">
            {props.list.header}
            </header>
            <div className="List-cards">
            {props.list.cardIds.map(key => {
                return <Card cardData={props.allCards[key]} />;
            })}
            </div>
        </section>
    );
}

export default List;
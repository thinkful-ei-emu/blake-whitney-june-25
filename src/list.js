import React from 'react';
import Card from './card';

function List (props){
    console.log(`ids : ${props.list.cardIds}`);
    return (
        <section className="List">
            <header className="List-cards">
            {props.list.header}
            </header>
            <div className="List-cards">
            {props.list.cardIds.map(key => {
                console.log(`id ${key}`);
                return <Card cardData={props.allCards[key]} />;
            })}
            </div>
        </section>
    );
}

export default List;
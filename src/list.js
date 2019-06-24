import React from 'react';
import Card from './card';

function List (props){
    return (
        <section className="List">
            <header className="List-cards">
            {this.props.STORE.lists.header}
            </header>
            <div className="List-cards">
            {this.props.STORE.allCards.map(card => {
                return Card(card);
            })}
            </div>
        </section>
    )
}

export default List;
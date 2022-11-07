import React, {useEffect} from 'react';
import style from './Field.module.css';
import Card from "./Card/Card";


const Field = (props) => {

    useEffect(() => {
        if (props.openCards.length === 2) {
            setTimeout(props.matchCards, 500)
        }
    });
    useEffect(() => {
        if (props.gameOver) {
            setTimeout(props.endGame, 1000)
        }
    });

    let cardsElements = props.cards.map(card => <Card id={card.id} opened={card.opened} matched={card.matched}
                                                      image={card.image}
                                                      key={card.id} movesCounter={props.movesCounter}
                                                      openCardsLength={props.openCards.length}
                                                      openTheCard={props.openTheCard}/>);

    return (
        <section className={style.field}>
            <div className={style.cards}>
                <h1 className={style.heading}>Memory</h1>
                <div className={style.card}>
                    {cardsElements}
                </div>
            </div>
        </section>
    );
};

export default Field;

import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div>
            {props.opened ?
                <button className={`${style.item} ${style.open} ${props.matched ? style.match : null}`}>
                    <img id={props.id} src={props.image} alt={''} className={style.image}/>
                </button> :
                props.openCardsLength === 2 ? <button className={`${style.item} ${style.close}`}/> :
                <button className={`${style.item} ${style.close}`} onClick={() => props.openTheCard(props.id)}/>
            }
        </div>
    );
};

export default Card;
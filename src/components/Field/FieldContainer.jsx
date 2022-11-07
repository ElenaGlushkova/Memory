//import React from 'react';
import Field from './Field';
import {connect} from 'react-redux';
import {endGameAC, matchCardAC, openTheCardAC} from "../../redux/cardsReduser";


const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        openCards: state.openCards,
        gameOver: state.gameOver,
        movesCounter: state.movesCounter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openTheCard: (cardId) => {
            dispatch(openTheCardAC(cardId))
        },
        matchCards: () => {
            dispatch(matchCardAC())
        },
        endGame: () => {
            dispatch(endGameAC())
        }
    }
};
const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;
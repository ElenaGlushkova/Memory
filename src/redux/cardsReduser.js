import coyote from '../images/coyote.png';
import fenech from '../images/fenech.png';
import fox from '../images/fox.png';
import koala from '../images/koala.png';
import koalaGreen from '../images/koalaGreen.png';
import lion from '../images/lion.png';
import owl from '../images/owl.png';
import wolf from '../images/wolf.png';
import _ from 'lodash';

const OPEN_CARD = 'OPEN-CARD';
const MATCH_CARDS = 'MATCH-CARDS';
const END_GAME = 'END-GAME';

const initialState = {
    cards: [
        {
            id: 1,
            opened: false,
            matched: false,
            image: coyote
        },
        {
            id: 2,
            opened: false,
            matched: false,
            image: coyote
        },
        {
            id: 3,
            opened: false,
            matched: false,
            image: fox
        },
        {
            id: 4,
            opened: false,
            matched: false,
            image: fox
        },
        {
            id: 5,
            opened: false,
            matched: false,
            image: fenech
        },
        {
            id: 6,
            opened: false,
            matched: false,
            image: fenech
        },
        {
            id: 7,
            opened: false,
            matched: false,
            image: koala
        },
        {
            id: 8,
            opened: false,
            matched: false,
            image: koala
        },
        {
            id: 9,
            opened: false,
            matched: false,
            image: lion
        },
        {
            id: 10,
            opened: false,
            matched: false,
            image: lion
        },
        {
            id: 11,
            opened: false,
            matched: false,
            image: owl
        },
        {
            id: 12,
            opened: false,
            matched: false,
            image: owl
        },
        {
            id: 13,
            opened: false,
            matched: false,
            image: wolf
        },
        {
            id: 14,
            opened: false,
            matched: false,
            image: wolf
        },
        {
            id: 15,
            opened: false,
            matched: false,
            image: koalaGreen
        },
        {
            id: 16,
            opened: false,
            matched: false,
            image: koalaGreen
        }
    ],
    openCards: [],
    gameOver: false,
    movesCounter: 0
};

let shuffledInitialState = {
    ...initialState,
    cards: _.shuffle(initialState.cards.map(card => ({...card}))),
    openCards: [...initialState.openCards],
    gameOver: initialState.gameOver,
    movesCounter: initialState.movesCounter
};

let openTheCard = (state, cardId) => {
    state.cards.forEach(card => {
            if (card.id === cardId) {
                card.opened = true;
            }
        }
    );
    if (state.openCards.length < 2) {
        state.openCards.push(cardId)
    }
    return state;
};

let matchCards = (state) => {
    state.movesCounter += 1;
    let matchedCards = matchImages(findImage(state, 0), findImage(state, 1));
    if (!matchedCards) {
        state.cards.forEach(card => {
            if (state.openCards.indexOf(card.id) !== -1) {
                card.opened = false;
            }
        });
    } else {
        state.cards.forEach(card => {
            if (state.openCards.indexOf(card.id) !== -1) {
                card.matched = true;
            }
        })
    }
    state.openCards.length = 0;
    if (state.cards.filter(card => card.opened).length === state.cards.length) {
        state.gameOver = true
    }
    return state;
};

let findImage = (state, i) => {
    return state.cards.find(card => card.id === state.openCards[i]).image
};

let matchImages = (image1, image2) => {
    return image1 === image2
};

const cardsReducer = (state = shuffledInitialState, action) => {
    switch (action.type) {
        case OPEN_CARD:
            return {
                ...openTheCard(state, action.cardId),
                cards: [...state.cards],
                openCards: [...state.openCards]
            };
        case MATCH_CARDS:
            return {
                ...matchCards(state),
                cards: [...state.cards],
                openCards: [...state.openCards],
                gameOver: state.gameOver,
                movesCounter: state.movesCounter
            };
        case END_GAME:
            let newGame = window.confirm('YOU WIN! Start a new game?');
            if(newGame) {
                return {
                    ...initialState,
                    cards: _.shuffle(initialState.cards.map(card => ({...card}))),
                    openCards: [...initialState.openCards],
                    gameOver: initialState.gameOver,
                    movesCounter: initialState.movesCounter
                }
            } else {
                return {
                    ...state
                }
            }
        default:
            return state;
    }
};

export const openTheCardAC = (cardId) => ({type: OPEN_CARD, cardId});
export const matchCardAC = () => ({type: MATCH_CARDS});
export const endGameAC = () => ({type: END_GAME});

export default cardsReducer;
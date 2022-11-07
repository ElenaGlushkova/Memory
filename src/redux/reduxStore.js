import {createStore} from "redux";
import cardsReducer from "./cardsReduser";


let store = createStore(cardsReducer);

window.store = store;

export default store;
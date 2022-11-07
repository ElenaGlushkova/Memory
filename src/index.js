import React from 'react';
import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from "./App";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);

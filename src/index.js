import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reminders from './Reducers/rootReducer';
 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css'
const store=createStore(reminders);


ReactDOM.render(
    <Provider store={store}><App/></Provider>,document.getElementById('root')
)
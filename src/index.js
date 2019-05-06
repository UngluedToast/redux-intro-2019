import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// State
// - is always an object (key-value pairs)
// - is never mutated directly 

const initialState = {
    value: 1
};


const ACTION_INCREMENT = 'increment';
const ACTION_DECREMENT = 'decrement';

// Actions
// 
function increment() {
    return {
        type: ACTION_INCREMENT
    };
}

function decrement(){
    return {
        type: ACTION_DECREMENT
    };
}

window.increment = increment;
window.decrement = decrement;

// 'increment' or 'decrement'


// A reducer

function counter(state=initialState,action) {
    // inspect the action
    switch (action.type){
        case ACTION_INCREMENT:
        // do some stuff
        return {
            value: state.value + 1
        }
        break;
        case ACTION_DECREMENT:
            return {
                value: state.value - 1
            };
        break;

        default:
            return state;
        break; 
    } 

}


window.counter = counter ;


// The Store

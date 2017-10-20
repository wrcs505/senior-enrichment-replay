import {RECEIVE_AIRCRAFT} from './action-creators'; 

const initialState = {
    aircraft: []
}

export default function rootReducer(state = initialState, action){
    let newState = Object.assign({}, state); 
    switch(action.type){
        case RECEIVE_AIRCRAFT: 
            newState.aircraft = action.aircraft;
            return newState
        default: 
            return state;
    }
}
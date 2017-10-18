import axios from 'axios'; 

export const RECEIVE_AIRCRAFT = 'RECEIVE_AIRCRAFT';

//action creator
export function receiveAircraft(aircraft){
    return {
        type: RECEIVE_AIRCRAFT,
        aircraft: aircraft
    }
}

//thunk
export function fetchAllAircraft () {
    console.log('did this run??');
    return function(dispatch){
        return axios.get('/api/aircraft')
            .then(res => res.data)
            .then(aircraft => {
                dispatch(receiveAircraft(aircraft));
            })
    }
}
import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES
const GET_AIRCRAFT = 'GET_AIRCRAFT';
const GET_ALL_AIRCRAFT = 'GET_ALL_AIRCRAFT';

// ACTION CREATORS
export function getAircraft (aircraft) {
  const action = { type: GET_AIRCRAFT, aircraft };
  return action;
}

export function getAllAircraft (allAircraft) {
  const action = { type: GET_ALL_AIRCRAFT, allAircraft };
  return action;
}

// THUNK CREATORS
export function fetchAllAircraft () {

  return function thunk (dispatch) {
    return axios.get('/api/aircraft')
      .then(res => res.data)
      .then(allAircraft => {
        const action = getAllAircraft(allAircraft);
        dispatch(action);
      });
  };
}

export function postAircraft (aircraft, history) {
  console.log('thunk log: ', aircraft)
  return function thunk (dispatch) {
    return axios.post('/api/aircraft', aircraft)
      .then(res => res.data)
      .then(newAircraft => {
        dispatch(getAircraft(newAircraft));
        // socket.emit('new-aircraft', newAircraft);
        // history.push(`/aircraft/${newAircraft.id}`);
      });
  };
}

export function deleteAircraft (aircraft, history) {

    return function thunk (dispatch) {
      return axios.delete(`/api/aircraft/${aircraft.aircraft}`)
        .then(res => res.data)
        .then(deletedAircraft => deletedAircraft);
    };
  }

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_AIRCRAFT:
      return [...state, action.aircraft];

    case GET_ALL_AIRCRAFT:
      return action.allAircraft
    default:
      return state;
  }

}

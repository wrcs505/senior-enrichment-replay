import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES
const GET_COUNTRY = 'GET_COUNTRY';
const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

// ACTION CREATORS
export function getCountry (country) {
  const action = { type: GET_COUNTRY, country };
  return action;
}

export function getAllCountries (allCountries) {
  const action = { type: GET_ALL_COUNTRIES, allCountries };
  return action;
}

// THUNK CREATORS
export function fetchAllCountries () {

  return function thunk (dispatch) {
    return axios.get('/api/country')
      .then(res => res.data)
      .then(allCountries => {
        const action = getAllCountries(allCountries);
        dispatch(action);
      });
  };
}

export function postCountry (country, history) {

  return function thunk (dispatch) {
    return axios.post('/api/country', country)
      .then(res => res.data)
      .then(newCountry => {
        dispatch(getCountry(newCountry));
        // socket.emit('new-country', newcountry);
        history.push(`/country/${newCountry.id}`);
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    // case GET_AIRCRAFT:
    //   return [...state, action.aircraft];

    case GET_ALL_COUNTRIES:
      return action.allCountries
    default:
      return state;
  }

}

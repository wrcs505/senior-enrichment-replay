import axios from 'axios';
// import socket from '../socket';

// ACTION TYPES
const GET_COUNTRY = 'GET_COUNTRY';
const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
const GET_NEW_COUNTRY = 'GET_COUNTRY';
// const GET_COUNTRY = 'GET_COUNTRY';


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
    return axios.get('/api/countries')
      .then(res => res.data)
      .then(allCountries => {
        const action = getAllCountries(allCountries);
        dispatch(action);
      });
  };
}

export function postCountry (country, history) {
console.log('thunk log: ', country)
  return function thunk (dispatch) {
    return axios.post(`/api/countries/`, country)
      .then(res => res.data)
      .then(newCountry => {
        dispatch(getCountry(newCountry));
        history.push(`/country/${newCountry.id}`);
      });
  };
}

export function deleteCountry (country, history) {
  console.log('thunk log: ', country)

    return function thunk (dispatch) {
      return axios.delete(`/api/countries/${country.country}`)
        .then(res => res.data)
        .then(deletedCountry => deletedCountry);
    };
  }

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {
    case GET_COUNTRY:
      return [...state, action.country]
    case GET_ALL_COUNTRIES:
      return  action.allCountries
    default:
      return state;
  }

}

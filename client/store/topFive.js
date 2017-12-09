import axios from 'axios';

const GET_TOP_FIVE = 'GET_TOP_FIVE';

export function getTopFive (topFive) {
  const action = { type: GET_TOP_FIVE, topFive };
  return action;
}

export function fetchTopFive () {

  return function thunk (dispatch) {
    return axios.get('/api/countries/topfive')
      .then(res => res.data)
      .then(topFive => {
        console.log('axios log: ', topFive)
        const action = getTopFive(topFive);
        dispatch(action);
      });
  };
}


// REDUCER
export default function reducer (state = [], action) {

    switch (action.type) {
      case GET_TOP_FIVE:
        return action.topFive
      default:
        return state;
    }

  }

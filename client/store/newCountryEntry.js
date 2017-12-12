const GET_SELECTED_COUNTRY = 'GET_SELECTED_COUNTRY';

export function getSelectedCountry (selectCountry) {
  const action = { type: GET_SELECTED_COUNTRY, selectCountry };
  return action;
}

export default function reducer (state = {}, action) {

    switch (action.type) {
      case GET_SELECTED_COUNTRY:
        return action.selectCountry;
      default:
        return state;
    }
  }

const GET_SELECTED_AIRCRAFT = 'GET_SELECTED_AIRCRAFT';

export function getSelectedAircraft (selectAircraft) {
  const action = { type: GET_SELECTED_AIRCRAFT, selectAircraft };
  return action;
}

export default function reducer (state = {}, action) {

    switch (action.type) {
      case GET_SELECTED_AIRCRAFT:
        return action.selectAircraft;
      default:
        return state;
    }
  }

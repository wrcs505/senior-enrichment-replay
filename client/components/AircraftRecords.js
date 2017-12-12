import React from 'react'
import AircraftInputs from './AircraftInputs'
import { postAircraft, deleteAircraft, getSelectedAircraft } from '../store';
import { connect } from 'react-redux';
import AircraftSelect from './AircraftSelect';
import AircraftDelete from './AircraftDelete';


function AircraftRecords (props) {

  var allAircraft = props.allAircraft;

    return (
      <div>
        <AircraftSelect onSubmit={props.getSelectedAircraft} aircraft={allAircraft} />
        <AircraftDelete onSubmit={props.deleteAircraft} aircraft={allAircraft} />
        <AircraftInputs onSubmit={props.submitVals} aircraft={props.selectedAircraft} />
      </div>
    )
}


const mapStateToProps = (state) => ({
  // ...
  allAircraft: state.allAircraft,
  selectedAircraft: state.allAircraft.find(aircraft => aircraft.model === state.selectAircraft.selectAircraft)
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    getSelectedAircraft (aircraft) {
      dispatch(getSelectedAircraft(aircraft));
    },
    submitVals (values) {
      const aircraftThunk = postAircraft(values)
      dispatch(aircraftThunk);
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    },
    deleteAircraft (aircraft) {
      console.log('mapDispatch log: ', aircraft)
      const deleteThunk = deleteAircraft(aircraft)
      dispatch(deleteThunk)
      window.alert(`You deleted:\n\n${JSON.stringify(aircraft, null, 2)}`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AircraftRecords);



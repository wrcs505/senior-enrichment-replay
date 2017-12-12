import React from 'react'
import AircraftInputs from './AircraftInputs'
import store, { postAircraft } from '../store';

export default class AircraftRecords extends React.Component {
  submit(values) {
    // print the form values to the console
    console.log('submitted vals: ',values)
    const aircraftThunk = postAircraft(values)
    store.dispatch(aircraftThunk);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  }
  render() {
    return <AircraftInputs onSubmit={this.submit} />
  }

}

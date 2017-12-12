import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let AircraftDelete = props => {
  // console.log('delete country log: ', props)
  const { handleSubmit, pristine, submitting, reset } = props
  const aircraftList = props.aircraft || [];
  return (
  <div>
    <label>Select an aircraft to delete from our list.</label>
    <form onSubmit={handleSubmit}>
      <Field name="aircraft" component="select">
        <option value="">Click to see all aircraft...</option>
        {
          aircraftList.map(aircraft => (
            <option value={aircraft.model} key={aircraft.id}>
            {aircraft.make + ' ' + aircraft.model}
            </option>
          ))
        }
      </Field>
      <button type="submit">
      Delete Aircraft
      </button>
    </form>
  </div>
  )
}

AircraftDelete = reduxForm({
  // a unique name for the form
  form: 'deleteAircraft'
})(AircraftDelete)

export default AircraftDelete;

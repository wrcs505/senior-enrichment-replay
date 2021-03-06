import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


let AircraftSelect = props => {
  console.log('select Aircraft log: ', props)
  const { handleSubmit, pristine, submitting, reset } = props
  const aircraftList = props.aircraft || [];
  return (
  <div>
    <label>Select an aircraft to edit from our list.</label>
    <form onSubmit={handleSubmit}>
      <Field name="selectAircraft" component="select">
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
      Edit Aircraft
      </button>
    </form>
  </div>
  )
}

AircraftSelect = reduxForm({
  // a unique name for the form
  form: 'selectAircraft'
})(AircraftSelect)

export default AircraftSelect;

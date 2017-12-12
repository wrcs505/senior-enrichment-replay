import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AircraftInputs = props => {
  const { handleSubmit, pristine, submitting, reset } = props
    console.log('inputs country log: ', props)
  const aircraft = props.aircraft || [];
  return (
    <form onSubmit={handleSubmit}>
    <h3>Enter Aircraft Data:</h3>
      <div>
        <label htmlFor="make">Aircraft Make</label>
        <Field name="make" component="input" type="text" placeholder={ aircraft.make } />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <Field name="model" component="input" type="text" placeholder={ aircraft.model } />
      </div>
      <div>
        <label htmlFor="year">Year of first flight</label>
        <Field name="year" component="input" type="text" placeholder={ aircraft.year } />
      </div>
      <div>
        <label htmlFor="type">Aircraft Type</label>
        <Field name="type" component="select" >
          <option value={ aircraft.type }>Current type is: { aircraft.type }</option>
          <option value="Attack">Attack</option>
          <option value="Bomber">Bomber</option>
          <option value="Reconoissance">Reconoissance</option>
          <option value="Rescue">Rescue</option>
          <option value="Versatile">Versatile</option>
        </Field>
      </div>
      <div>
        <label htmlFor="cost">Cost (in millions)</label>
        <Field name="cost" component="input" type="number" placeholder={ aircraft.cost } />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <Field name="imageUrl" component="input" type="text"
        placeholder={ aircraft.imageUrl } />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" placeholder={ aircraft.description } />
      </div>
      <button type="submit">Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </button>
    </form>
  )
}

AircraftInputs = reduxForm({
  // a unique name for the form
  form: 'aircraftInputs'
})(AircraftInputs)

export default AircraftInputs;

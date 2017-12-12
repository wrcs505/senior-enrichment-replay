import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import store, { fetchAllCountries } from '../store';


let CountryInputs = props => {
  const { handleSubmit, pristine, submitting, reset } = props

  const country = props.country || [];

  console.log('input country log: ', country)
  // var selectedCountry;

  // console.log('country state log: ', store.getState())
  return (
    <form onSubmit={ handleSubmit }>
      <h3>Enter Country Data:</h3>
      <div>
        <label htmlFor="name">Country Name</label>
        <Field name="name" component="input" type="text" placeholder={ country.name } />
      </div>
      <div>
        <label htmlFor="GFI">Global Firepower Index</label>
        <Field name="GFI" component="input" type="number"  placeholder={ country.GFI } />
      </div>
      <div>
        <label htmlFor="flagUrl">Flag URL</label>
        <Field name="flagUrl" component="input" type="text"  placeholder={ country.flagUrl } />
      </div>
      <button type="submit">Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </button>
    </form>
  )
}

CountryInputs = reduxForm({
  // a unique name for the form
  form: 'countryInputs'
})(CountryInputs)

export default CountryInputs;

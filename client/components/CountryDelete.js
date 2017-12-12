import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, formValues } from 'redux-form';

let CountryDelete = props => {
  // console.log('delete country log: ', props)
  const { handleSubmit, pristine, submitting, reset } = props
  const countries = props.countries || [];
  return (
  <div>
    <label>Select a country to delete from our list.</label>
    <form onSubmit={handleSubmit}>
      <Field name="country" component="select">
        <option value="">Click to see all countries...</option>
        {
          countries.map(country => (
            <option value={country.name} key={country.id}>
            {country.name}
            </option>
          ))
        }
      </Field>
      <button type="submit">
      Delete Country
      </button>
    </form>
  </div>
  )
}

CountryDelete = reduxForm({
  // a unique name for the form
  form: 'deleteCountry'
})(CountryDelete)

export default CountryDelete;

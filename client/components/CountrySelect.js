import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, formValues } from 'redux-form';
import { deleteCountry } from '../store';

let CountrySelect = props => {
  console.log('select country log: ', props)
  const { handleSubmit, pristine, submitting, reset } = props
  const countries = props.countries || [];
  return (
  <div>
    <label>Select a country to edit from our list.</label>
    <form onSubmit={handleSubmit}>
      <Field name="selectCountry" component="select">
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
      Edit Country
      </button>
    </form>
  </div>
  )
}

CountrySelect = reduxForm({
  // a unique name for the form
  form: 'selectCountry'
})(CountrySelect)

export default CountrySelect;

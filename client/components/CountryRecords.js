import React from 'react'
import CountryInputs from './CountryInputs'
import { connect } from 'react-redux';
import { postCountry, getSelectedCountry, deleteCountry } from '../store';
import CountrySelect from './CountrySelect';
import CountryDelete from './CountryDelete';


function CountryRecords (props) {
  var countries = props.allCountries;
    return (
      <div>
        <CountrySelect onSubmit={props.getSelectedCountry} countries={countries} />
        <CountryDelete onSubmit={props.deleteCountry} countries={countries} />
        <CountryInputs onSubmit={props.submitVals} country={props.selectedCountry} />
      </div>
    )
}


const mapStateToProps = (state) => ({
  allCountries: state.allCountries,
  selectedCountry: state.allCountries.find(country => country.name === state.selectCountry.selectCountry)
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    getSelectedCountry (country) {
      dispatch(getSelectedCountry(country));
    },
    submitVals (values) {
      const countryThunk = postCountry(values)
      dispatch(countryThunk);
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    },
    deleteCountry (country) {
      console.log('mapDispatch log: ', country)
      const deleteThunk = deleteCountry(country)
      dispatch(deleteThunk)
      window.alert(`You deleted:\n\n${JSON.stringify(country, null, 2)}`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryRecords);


import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Country from './Country'

function CountryList (props) {

  // fix nested aircraft/allCountry state

  // console.log('props log: ',props)

  const allCountries = props.allCountries || [];

  return (
    <div>
      <ul className="media-list">
        { allCountries.map(country => <Country country={country} key={country.id} />) }
      </ul>
      {
      // <NewCountryEntry countryId={countryId} />
      }
    </div>
  );
}
class CountryListLoader extends Component {

  // componentDidMount () {
  //   this.props.changeCurrentChannel(this.props.channel.name);
  // }

  // componentWillReceiveProps (nextProps) {
  //   if (nextProps.channel.name !== this.props.channel.name) {
  //     this.props.changeCurrentChannel(nextProps.channel.name);
  //   }
  // }

  render () {
    return (
      <CountryList {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const countryID = Number(ownProps.match.params.countryID);

  if (countryID) {
    const singleCountry = state.allCountries.filter(country => country.id === countryID)
    return { allCountries: singleCountry}
  } else {
    return { allCountries: state.allCountries }
  }
};

export default withRouter(connect(mapStateToProps)(CountryListLoader));

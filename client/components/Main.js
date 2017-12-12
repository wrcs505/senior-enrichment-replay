import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchAllAircraft, fetchAllCountries, fetchTopFive } from '../store';
import AircraftList from './AircraftList';
import CountryList from './CountryList';
import Navbar from './Navbar';
import TopFive from './TopFive';
import CountryRecords from './CountryRecords';
import AircraftRecords from './AircraftRecords';

export default class Main extends Component {

  // should this be a connected component--is this causing the overwrite behavior?

  componentDidMount () {
    const aircraftThunk = fetchAllAircraft();
    const countriesThunk = fetchAllCountries();
    const topFiveThunk = fetchTopFive();
    store.dispatch(aircraftThunk);
    store.dispatch(countriesThunk);
    store.dispatch(topFiveThunk);
  }

  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/country-records" component={ CountryRecords } />
          <Route exact path="/aircraft-records" component={ AircraftRecords } />
          <Route exact path="/aircraft" component={ AircraftList } />
          <Route exact path="/aircraft/:aircraftID" component={ AircraftList } />
          <Route exact path="/countries" component={ CountryList } />
          <Route exact path="/countries/topfive" component={ TopFive } />
          <Route exact path="/countries/:countryID" component={ CountryList } />
          <Redirect to="/aircraft/" />
          {

          }
        </Switch>


        {
          // <Sidebar />
          // <Navbar />
          // <main>
          //   <Switch>
          //     <Route path="/new-channel" component={NewChannelEntry} />
          //     <Route path="/channels/:channelId" component={MessagesList} />
          //     <Redirect to="/channels/1" />
          //   </Switch>
          // </main>
        }
        {

        }

      </div>
    );
  }
}

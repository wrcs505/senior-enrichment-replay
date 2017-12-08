import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchAllAircraft } from '../store';
import AircraftList from './AircraftList';

export default class Main extends Component {

  componentDidMount () {
    const aircraftThunk = fetchAllAircraft();
    // const countriesThunk = fetchCountries();
    store.dispatch(aircraftThunk);
    // store.dispatch(countriesThunk);
  }

  render () {
    return (
      <div>
      <Switch>
        <Route exact path="/aircraft" component={ AircraftList } />
        <Route exact path="/aircraft/:aircraftID" component={ AircraftList } />
        <Route exact path="/countries" component={ CountryList } />
        <Route exact path="/countries/:countryID" component={ CountryList } />
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
          //<Navbar />
        }

      </div>
    );
  }
}

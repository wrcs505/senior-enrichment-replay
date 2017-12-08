import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Aircraft from './Aircraft'

function AircraftList (props) {

  // fix nested aircraft/allAircraft state

  console.log('props log: ',props)

  const allAircraft = props.allAircraft || [];

  return (
    <div>
      <ul className="media-list">
        { allAircraft.map(aircraft => <Aircraft aircraft={aircraft} key={aircraft.id} />) }
      </ul>
      {
      // <NewAircraftEntry countryId={countryId} />
      }
    </div>
  );
}
class AircraftListLoader extends Component {

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
      <AircraftList {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const aircraftID = Number(ownProps.match.params.aircraftID);

  if (aircraftID) {
    const singleAircraft = state.allAircraft.filter(aircraft => aircraft.id === aircraftID)

    return { allAircraft: singleAircraft}
  } else {
    return { allAircraft: state.allAircraft }
  }
};

export default withRouter(connect(mapStateToProps)(AircraftListLoader));


  // old messagesList return:
  // return (
  //   <ul>
  //     {
  //       allAircraft.map(aircraft => {
  //         return (
  //           <li key={aircraft.id}>
  //             <NavLink
  //             to={`/aircraft/${aircraft.id}`}>
  //               <h3>Make: {aircraft.make} </h3>
  //               <h3>Model: {aircraft.model} </h3>

  //               {
  //                 // update for aircraft/country filter
  //                 // <span className="badge">{ messages.filter(message => message.aircraftId === aircraft.id).length }</span>
  //               }

  //             </NavLink>
  //           </li>
  //         );
  //       })
  //     }
  //     {
  //     // <li>
  //     //   <NavLink to="/new-channel">Create a channel...</NavLink>
  //     // </li>
  //     }
  //   </ul>
  // );





import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default function Aircraft (props) {


  const aircraft = props.aircraft || [];
  const aircraftCountry = props.aircraft.country;

  console.log('aircraft log: ', aircraft)
  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={aircraft.imageUrl} alt="image" />
        </a>
      </div>
      <div className="media-body">
      {
      // <h4 className="media-heading">{ aircraft }</h4>
      }
        <h4 className="media-heading">{ aircraft.make }</h4>
        <NavLink to={`/aircraft/${aircraft.id}`}>
          <h2 className="media-heading">{ aircraft.model }</h2>
        </NavLink>
        <h4 className="media-heading">Cost: { aircraft.cost }</h4>
        <h4 className="media-heading">Year: { aircraft.year }</h4>
        <h4 className="media-heading">Type: { aircraft.type }</h4>
        <h5>Owner:</h5>
        <NavLink to={`/countries/${aircraftCountry.id}`}>
          <h4>{ aircraftCountry.name }</h4>
        </NavLink>
      </div>
    </li>
  );
}

import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default function Country (props) {

  const country = props.country || [];
  const countryAircraft = country.aircraft || [];

  console.log('country log: ', country.aircraft)
  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={country.flagUrl} alt="image" />
        </a>
      </div>
      <div className="media-body">
      {
      // <h4 className="media-heading">{ country }</h4>
      }
        <NavLink to={`/countries/${country.id}`}>
          <h2 className="media-heading">{ country.name }</h2>
        </NavLink>
        <h4 className="media-heading">Global Firepower Index: { country.GFI }</h4>
        {
          countryAircraft.map(aircraft => {
            return (
              <div key={ aircraft.id }>
                <NavLink to={`/aircraft/${aircraft.id}`}>
                  <h5>{ aircraft.model }</h5>
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </li>
  );
}

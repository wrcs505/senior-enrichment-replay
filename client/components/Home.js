import React from 'react';
import AircraftList from './AircraftList';
import CountryList from './CountryList';
import { NavLink } from 'react-router-dom';

export default function Home (props) {
  return (
    <div>
      <div style={{display: "inline-block", float: "left"}}>
        <h2>See all countries:</h2>
        <CountryList />
      </div>
      <div style={{display: "inline-block", float: "left"}}>
        <h2>See all aircraft:</h2>
        <AircraftList />
      </div>
      <div style={{display: "inline-block", float: "left", margin: "20px"}}>
        <NavLink to="/aircraft-records">
          <span>
           <h3>Add, Edit, Delete an Aircraft Record </h3>
          </span>
        </NavLink>
      </div>
      <div style={{display: "inline-block", float: "left", margin: "20px"}}>
        <NavLink to="/country-records">
          <span>
           <h3>Add, Edit, Delete a Country Record </h3>
          </span>
        </NavLink>
      </div>
      <div style={{display: "inline-block", float: "left", margin: "20px"}}>
        <NavLink to="/countries/topfive">
          <span>
          <h3>See Top 5 GFI List</h3>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

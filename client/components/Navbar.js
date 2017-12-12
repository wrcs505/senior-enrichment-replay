import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

export default function Navbar (props) {

  return (
    <div>
      <nav>
      <h1>Welcome to Will's <NavLink to="/">CRUDdy app</NavLink></h1>
      <div>
        <NavLink to="/aircraft">
          <span>
            <h3>Full Aircraft List</h3>
          </span>
        </NavLink>
        <NavLink to="/countries">
          <span>
            <h3>Full Country List</h3>
          </span>
        </NavLink>
      </div>
      </nav>
    </div>
  );
}



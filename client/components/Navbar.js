import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function Navbar (props) {

  // const { currentChannel } = props;

  return (

      <nav>
        <NavLink to="/aircraft">
          <span>
            <h3># Aircraft List</h3>
          </span>
        </NavLink>
        <NavLink to="/countries">
          <span>
            <h3># Country List</h3>
          </span>
        </NavLink>
      </nav>
  );
}

const mapStateToProps = function (state) {
  return {
    // currentChannel: state.currentChannel
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));

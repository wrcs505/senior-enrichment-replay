import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

export default function Navbar (props) {

  // const { currentChannel } = props;

  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
}

// const mapStateToProps = function (state) {
//   return {
//     // currentChannel: state.currentChannel
//   };
// };

// export default withRouter(connect(mapStateToProps)(Navbar));

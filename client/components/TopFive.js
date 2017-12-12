import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Country from './Country'

function TopFive (props) {
  // Top 5 in progress:


  // console.log('T5 props log: ', props)
  const topFive = props.topFive || [];

  return (
    <div>
      <ul>
        {
          topFive.map((country, idx) => {
            return <Country country={ country } key={country.id} />
          })

        }
      </ul>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    topFive: state.topFive
  };
};

export default withRouter(connect(mapStateToProps)(TopFive));

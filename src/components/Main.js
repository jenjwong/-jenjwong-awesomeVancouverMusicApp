import React, { Component } from 'react';
import EventsList from './EventsList';
import AppLogo from './AppLogo';
import Filters from './Filters';
// import venueDecalLogo from '../css/images/bandsNearbyLogo.svg';
import { connect } from 'react-redux';
import { fetchConcertData } from '../actions/actionCreators'


const concertData = require('../../server/data/productionBetaData');

class Main extends Component {

  componentDidMount() {
    document.addEventListener('touchstart', () => {}, true);
  }

  render() {
    return (
      <div>
        <header>
          <div className="header-container">
            <AppLogo />
             <Filters />
          </div>
        </header>
        <div className="main-view-wrapper">
          <div className="main-view-left" />
          <div className="main-view-center">
            <EventsList
              concerts={this.props.concerts}
            />
            <div className="decal-logo-container-mobile">
            </div>
          </div>
          <div className="main-view-right">
            <div className="decal-logo-container">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import EventsList from './EventsList';
import AppLogo from './AppLogo';
import { sortByDate } from '../utilities/filterHelpers';
import Filters from './Filters';
import venueDecalLogo from '../../public/bandsNearbyLogo.svg';

const concertData = require('../../server/data/productionBetaData');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      concertData,
      concerts: {},
    };
  }

  componentWillMount() {
    this.setState({ concerts: sortByDate(this.state.concertData) });
  }

  componentDidMount() {
    document.addEventListener('touchstart', () => {}, true);
  }

  handleFilters = (filtered) => {
    this.setState({ concerts: filtered });
  }

  render() {
    return (
      <div>
        <header>
          <div className="header-container">
            <AppLogo />
            <Filters
              concertData={this.state.concertData}
              concerts={this.state.concerts}
              handleFilters={this.handleFilters}
            />
          </div>
        </header>
        <div className="main-view-wrapper">
          <div className="main-view-left" />
          <div className="main-view-center">
            <EventsList
              concerts={this.state.concerts}
            />
            <div className="decal-logo-container-mobile">
              <img src={venueDecalLogo} className="decal-logo-mobile" alt="logo" />
            </div>
          </div>
          <div className="main-view-right">
            <div className="decal-logo-container">
              <img src={venueDecalLogo} className="decal-logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

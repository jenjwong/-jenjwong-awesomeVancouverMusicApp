import React, { Component, PropTypes } from 'react';
import EventsList from './EventsList';
import AppLogo from './AppLogo';
import Filters from './Filters';

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
            <div className="decal-logo-container-mobile" />
          </div>
          <div className="main-view-right">
            <div className="decal-logo-container" />
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
};

export default Main;

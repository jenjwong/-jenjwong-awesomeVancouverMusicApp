import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { fetchConcertData } from '../actionCreators'
// const concertData = require('../../server/data/productionBetaData');

class MainContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchConcertData(`http://demo5496710.mockable.io/`))
  }
  render() {
    return (
      <Main concerts={this.props.concerts}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    concerts: state.concerts.filteredConcertsArray.map(key => state.concerts.concertsDictionary[key])
  }
};

export default connect(mapStateToProps)(MainContainer);

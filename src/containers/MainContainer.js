import React, { Component } from 'react';
import Main from '../components/Main';
import { connect } from 'react-redux';
import { fetchConcertData } from '../actions/actionCreators';
import { sortByDate } from '../utilities/filterHelpers';
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
    concerts: sortByDate(state.concerts.filteredConcertsArray.map(key => state.concerts.concertsDictionary[key]))
  }
};

export default connect(mapStateToProps)(MainContainer);

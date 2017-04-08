import _throttle from 'lodash/throttle';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import * as utils from '../utilities/utils';
const { setSearchTerm, setSearchCost, setConcertCostMin, setConcertCostMax, isCostSpecified, handleSearch } = actionCreators;
import * as filterHelpers from  '../utilities/filterHelpers';
const { findMinMax, filterByCost, filterByTypeahead, displayMin } = filterHelpers;
const { isSmallScreen, isFree } = utils;
import PriceRangeInput from './PriceRangeInput';

class Filters extends Component {
  constructor() {
    super();
    this.throttleHandleCostRangeInputChange = _throttle(this.handleCostRangeInputChange, 17)
  }

  static propTypes = {
    concertData: PropTypes.arrayOf(PropTypes.object),
    handleFilters: PropTypes.func,
    concerts: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
  }


  handleSearchInputChange = (event) => {
    this.props.dispatch(handleSearch(event.target.value))
  }

  throttledHandleSearchInputChangeHandler = (event) => {
    event.persist()
    this.throttleHandleCostRangeInputChange(event)
  }


  handleCostRangeInputChange = (event) => {
    if (!this.props.isCostSpecified) {
      this.props.dispatch(isCostSpecified(true))
    }
    this.props.dispatch(setSearchCost(event.target.value))
    this.props.dispatch(handleSearch('', event.target.value))
  }

  // returns searchedCost or max if no search cost is entered
  searchedCostOrMax = (searchedCost, max) => {
    return max !== -Infinity && searchedCost > max | !this.props.isCostSpecified ? max : searchedCost;
  }

  isCostActive = (classname) => {
    if (this.props.min !== Infinity && this.props.concerts[0] && this.props.max !== this.props.min) {
      return `${classname}`;
    } else if (this.props.min === Infinity) {
      return `${classname} total-opaque`;
    }
    return `${classname} partial-opaque`;
  }



  render() {
    const { searchTerm, searchCost, min, max } = this.props


    if (!this.props.isCostSpecified && this.rangeInput) {
      this.rangeInput.value = this.props.max;
    }

    return (
      <div className="filters-container">
        <div className="typeahead-container">
          <input name="typeAheadString" id="typeAheadString" type="text" className="typed-input" onChange={e => this.handleSearchInputChange(e)} placeholder="Band/SoundsLike/Venue" value={searchTerm}/>
        </div>
        <div className="searched-cost-container-mobile">
          <div className="searched-cost-frame-mobile">
            <div className={this.isCostActive("searched-cost-mobile")}>{searchCost}</div>
          </div>
        </div>
        <div className={this.isCostActive("cost-input-container")}>
          <div className="price-label-container">
            <span className="searched-cost">
              {isFree(searchCost)}
            </span>
          </div>
          <span className="cost-input-bar-container">
            <span className="cost-min-container">
              {this.props.min !== Infinity &&
                <span className="cost-min">{displayMin(this.props.min)}</span>}
            </span>
            <span className="cost-input-span">
              {PriceRangeInput(min, max, searchCost, this.throttledHandleSearchInputChangeHandler)}
            </span>
            <span className="cost-max-container">
              {this.props.max !== -Infinity && <span className="cost-max">${this.props.max}</span>}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.filters.searchTerm,
    searchCost: state.filters.searchCost,
    concerts: state.concerts.filteredConcertsArray,
    min: state.filters.concertsCostMin,
    max: state.filters.concertsCostMax,
    isCostSpecified: state.filters.isCostSpecified,
  }
};

export default connect(mapStateToProps)(Filters);

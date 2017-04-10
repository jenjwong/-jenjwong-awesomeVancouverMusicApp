import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import sanitize from 'sanitize-caja';
import * as actionCreators from '../actions/actionCreators';
import * as utils from '../utilities/utils';
import * as filterHelpers from  '../utilities/filterHelpers';
import _throttle from 'lodash/throttle';
import PriceRangeInput from './PriceRangeInput';
import TypeInput from './TypeInput';


const { isCostSpecified, handleSearch } = actionCreators;
const { findMinMax, filterByCost, filterByTypeahead, displayMin } = filterHelpers;
const { displaySearchCost } = utils;

class Filters extends Component {
  constructor() {
    super();
    this.throttleHandleCostRangeInputChange = _throttle(this.handleCostRangeInputChange, 17);
  }

  static propTypes = {
    concertData: PropTypes.arrayOf(PropTypes.object),
    handleFilters: PropTypes.func,
    concerts: PropTypes.arrayOf(PropTypes.string),
    dispatch: PropTypes.func,
  }

  handleSearchInputChange = e => this.props.dispatch(handleSearch(sanitize(e.target.value)));

  throttledHandleSearchInputChangeHandler = (event) => {
    event.persist();
    this.throttleHandleCostRangeInputChange(event);
  }

  handleCostRangeInputChange = (event) => {
    !this.props.isCostSpecified ? this.props.dispatch(isCostSpecified(true)) :
    this.props.dispatch(handleSearch('', parseInt(event.target.value)))
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
    const { searchTerm, searchCost, min, max, isCostSpecified } = this.props;
    return (
      <div className="filters-container">
        <div className="typeahead-container">
          <TypeInput searchTerm={this.props.searchTerm} handleSearchInputChange={this.handleSearchInputChange} />
        </div>
        <div className="searched-cost-container-mobile">
          <div className="searched-cost-frame-mobile">
            <div className={this.isCostActive("searched-cost-mobile")}>
              {displaySearchCost(searchCost, min, max, isCostSpecified, searchTerm)}
            </div>
          </div>
        </div>
        <div className={this.isCostActive("cost-input-container")}>
          <div className="price-label-container">
            <span className="searched-cost">
              {displaySearchCost(searchCost, min, max, isCostSpecified, searchTerm)}
            </span>
          </div>
          <span className="cost-input-bar-container">
            <span className="cost-min-container">
              {this.props.min !== Infinity &&
                <span className="cost-min">{displayMin(this.props.min)}</span>}
            </span>
            <span className="cost-input-span">
              <PriceRangeInput
                max={this.props.max}
                min={this.props.min}
                searchCost={this.props.searchCost}
                handleCostRangeInputChange={this.throttledHandleSearchInputChangeHandler}
              />
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
    searchTerm: state.filters.searchTerm
  }
};

export default connect(mapStateToProps)(Filters);

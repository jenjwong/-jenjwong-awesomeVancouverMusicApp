import debounce from 'lodash/debounce';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, setSearchCost, setConcertCostMin, setConcertCostMax, isCostSpecified, handleSearch } from '../actionCreators';
import { findMinMax, filterByCost, filterByTypeahead, displayMin } from '../utilities/filterHelpers';
import { isSmallScreen, isFree } from '../utilities/utils';

class Filters extends Component {

  static propTypes = {
    concertData: PropTypes.arrayOf(PropTypes.object),
    handleFilters: PropTypes.func,
    concerts: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {

    };
    // this.debouncedHandleInput = debounce(this.handleInput, 15);
  }

  // handles value update when min/max range changes from text filter
  componentDidUpdate() {
    if (!this.props.isCostSpecified && this.rangeInput) {
      this.rangeInput.value = this.props.max;
    }
  }

  handleSearchInputChange (event) {
    this.props.dispatch(handleSearch(event.target.value))
  }

  handleCostRangeInputChange (event) {
    this.props.dispatch(setSearchCost(event.target.value))
    this.props.dispatch(isCostSpecified(true))
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

  costRenderHelper = () => {
    if (isSmallScreen()) {
      return (
        <input
          name="searchedCost"
          type="range"
          className="cost-input"
          onTouchEnd={e => this.handleCostRangeInputChange(e)}
          onTouchStart={e => this.handleCostRangeInputChange(e)}
          onMouseUp={e => this.handleCostRangeInputChange(e)}
          min={this.props.min}
          max={this.props.max}
          ref={(input) => { this.rangeInput = input; }}
        />
      );
    }
    return (
      <input
        name="searchedCost"
        type="range"
        value={this.props.searchCost}
        className="cost-input"
        onChange={e => this.handleCostRangeInputChange(e)}
        onMouseUp={e => this.handleCostRangeInputChange(e)}
        min={this.props.min}
        max={this.props.max}
      />
    );
  }

  render() {
    const { searchTerm, searchCost } = this.props
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
              {this.costRenderHelper()}
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
    searchTerm: state.searchTerm,
    searchCost: state.searchCost,
    concertData: state.concertData,
    min: state.concertsCostMin,
    max: state.concertsCostMax,
    isCostSpecified: state.isCostSpecified,
  }
};

export default connect(mapStateToProps)(Filters);

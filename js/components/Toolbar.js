import React, { Component } from 'react';

export default class Toolbar extends Component {
  nameSort() {
    this.props.nameSort()
  }

  ageSort() {
    this.props.ageSort()
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="toolbar">
            <button onClick = { this.nameSort.bind(this) } className="btn btn-info">
              <i className="icon fa fa-sort-alpha-asc"></i>
              <span>Sort by name</span>
            </button>

            <button onClick = { this.ageSort.bind(this) } className="btn btn-info">
              <i className="icon fa fa-sort-numeric-desc"></i>
              <span>Sort by age</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

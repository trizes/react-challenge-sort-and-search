import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="searchbar form-group">
            <input
              className = "form-control"
              type = "text"
              placeholder = "Search people by name..."
              value = { this.props.text }
              onChange = { this.props.search }
            />
          </div>
        </div>
      </div>
    );
  }
}

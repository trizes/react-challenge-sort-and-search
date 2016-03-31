import React, { Component } from 'react';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

export default class SearchBar extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-10">
          <table className="user-list table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <UserData />
            </tbody>
          </table>
        </div>

        <div className="col-sm-4 col-md-3 col-lg-2">
          <ActiveUser />
        </div>
      </div>
    );
  }
}

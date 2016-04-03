import React, { Component } from 'react';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

export default class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
              {
                this.props.users.map( user => {
                  return <UserData
                          user = { user }
                          focusUser = { this.props.focusUser }
                          key = { user.id }
                          />
                })
              }
            </tbody>
          </table>
        </div>

        <div className="col-sm-4 col-md-3 col-lg-2">
          <ActiveUser user = { this.props.activeUser } />
        </div>
      </div>
    );
  }
}

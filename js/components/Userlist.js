import React, { Component } from 'react';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

export default class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeUser: ''
    };
  }

  componentDidMount() {
    const component = this;

    fetch('/data.json')
    .then( response => { return response.json() })
    .then( json => {
      component.setState({ data: json, activeUser: json[0] })
    })
  }

  focusUser(id) {
    this.setState({
      activeUser: this.state.data[id.id]
    })
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
                this.state.data.map( user => {
                  return <UserData
                          user = { user }
                          focusUser = { this.focusUser.bind(this) }
                          key = { user.id }
                          />
                })
              }
            </tbody>
          </table>
        </div>

        <div className="col-sm-4 col-md-3 col-lg-2">
          <ActiveUser user = { this.state.activeUser } />
        </div>
      </div>
    );
  }
}

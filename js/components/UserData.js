import React, { Component } from 'react';

export default class UserData extends Component {
  focusUser(user) {
    this.props.focusUser({ user })
  }

  render() {
    let user = this.props.user;

    return(
      <tr onClick = { this.focusUser.bind(this, user) } >
        <td>
          <img src= { `images/${user.image}.svg` } className="user-image" />
        </td>
        <td> { user.name } </td>
        <td> { user.age } </td>
        <td> { user.phone } </td>
      </tr>
    );
  }
}

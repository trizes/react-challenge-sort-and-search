import React, { Component } from 'react';

export default class UserData extends Component {
  focusUser(id) {
    this.props.focusUser({ id })
  }

  render() {
    let user = this.props.user;

    return(
      <tr onClick = { this.focusUser.bind(this, user.id) } >
        <td>
          <img src= { `images/${user.image}.svg` } />
        </td>
        <td> { user.name } </td>
        <td> { user.age } </td>
        <td> { user.phone } </td>
      </tr>
    );
  }
}

import React, { Component } from 'react';

export default class UserData extends Component {
  render() {
    return(
      <tr>
        <td> { this.props.name } </td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
      </tr>
    );
  }
}

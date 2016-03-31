import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    return(
      <div className="thumbnail">
        <img src="images/owl.svg" />
        <div className="thumbnail-caption">
          <h3>Chad Snyder</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>28</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>owl</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>8 (629) 653-9041</td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Favorite phrase:</b>
            <span> </span>
            <span>Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.</span>
          </p>
        </div>
      </div>
    );
  }
}

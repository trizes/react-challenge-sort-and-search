import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('/data.json')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log(json)
      this.setState({ data: json })
    }.bind(this)).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar />
        <Toolbar />
        <Userlist list = { this.state.data } />
      </div>
    );
  }
}

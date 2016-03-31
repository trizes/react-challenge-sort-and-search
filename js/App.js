import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: '',
    };
  }

  nameSort() {
    console.log('nameSort')
  }

  ageSort() {
    console.log('ageSort')
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar />
        <Toolbar ageSort = { this.ageSort } nameSort = { this.nameSort } />
        <Userlist sorting = { this.state.sorting } />
      </div>
    );
  }
}

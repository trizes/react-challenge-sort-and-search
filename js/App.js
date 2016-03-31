import React, { Component } from 'react';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      count: 0
    };
  }

  updateBtn() {
    const phrases = [ 'Фраза.' ];
    this.setState({
      count: this.state.count + 1,
      phrase: phrases[0]
    });
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar />
        <Toolbar />
        <Userlist />
      </div>
    );
  }
}

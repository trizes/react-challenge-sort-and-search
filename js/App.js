import React, { Component } from 'react';
import Button from './components/Button';
import SearchBar from './components/SearchBar';

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
      <div className="container app">
        <Button count={this.state.count} update={this.updateBtn.bind(this)} />
        <SearchBar />
        <p style={{marginTop: 2 + 'rem'}}>{this.state.phrase}</p>
      </div>
    );
  }
}

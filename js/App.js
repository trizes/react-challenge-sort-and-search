import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeUser: '',
      sortBy: '',
      order: true
    };
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    const component = this;
    fetch('/data.json')
    .then( response => { return response.json() })
    .then( json => {
      component.setState({ data: json, activeUser: json[0] })
    })
    return component.state.data
  }

  focusUser(user) {
    this.setState({
      activeUser: user.user
    })
  }

  nameSort() {
    this.sortUsers('name')
  }

  ageSort() {
    this.sortUsers('age')
  }

  sortUsers(field) {
    if (this.state.sortBy == field) {
      this.setState({
        order: !this.state.order
      })
    }

    let sorted = this.state.data.sort(this._sorting(field))

    this.setState({
      data: sorted,
      activeUser: sorted[0],
      sortBy: field
    })
  }

  _sorting(field) {
    if (this.state.order) {
      return (a, b) => {
        return (a[field] > b[field]) - (a[field] < b[field])
      }
    } else {
      return (a, b) => {
        return (a[field] < b[field]) - (a[field] > b[field])
      }
    }
  }

  render() {
    let users = this.state.data
    let activeUser = this.state.activeUser

    return (

      <div className="app container-fluid">
        <SearchBar />
        <Toolbar ageSort = { this.ageSort.bind(this) } nameSort = { this.nameSort.bind(this) } />
        <Userlist users = { users }
                  activeUser = { activeUser }
                  focusUser = { this.focusUser.bind(this) } />
      </div>
    );
  }
}

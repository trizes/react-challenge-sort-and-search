import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: '',
      data: [],
      searchTerm: '',
      order: true,
      sortBy: ''
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
    if (this.state.sortBy != field) {
      this.state.order = true
    } else {
      this.state.order = !this.state.order
    }

    let sorted = this.state.data.sort(this._sorting(field, this.state.order))

    this.state.sortBy = field
    this.setState({
      data: sorted,
      activeUser: sorted.filter(function(elem){ return elem.match == true })[0] || sorted[0]
    })
  }


  search(e) {
    this.state.searchTerm = e.target.value

    let regexp = new RegExp(e.target.value, 'i')
    let matchingUsers = this.state.data.map( elem => {
      elem.match = regexp.test(elem.name)
      return elem
    })

    this.setState({
      data: matchingUsers,
      activeUser: matchingUsers.filter(function(elem){ return elem.match == true })[0]
    })
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar
          text = { this.state.searchTerm }
          search = { this.search.bind(this) }
        />
        
        <Toolbar
          ageSort = { this.ageSort.bind(this) }
          nameSort = { this.nameSort.bind(this) }
        />

        <Userlist
          users = { this.state.data }
          activeUser = { this.state.activeUser }
          focusUser = { this.focusUser.bind(this) }
        />
      </div>
    );
  }

  _sorting(field, order) {
    if (order) {
      return (a, b) => {
        return (a[field] > b[field]) - (a[field] < b[field])
      }
    } else {
      return (a, b) => {
        return (a[field] < b[field]) - (a[field] > b[field])
      }
    }
  }
}

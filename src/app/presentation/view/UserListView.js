import React, { Component } from 'react';

import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

import Presenter from '../presenter/UserListPresenter';


class UserListView extends Component {
  constructor(props) {
    super(props);
    this.presenter = new Presenter(this);
    this.state = {
      users: this.presenter.users
    };
  }


  componentDidMount(){
    this.presenter.resume()
  }

  componentWillUnmount(){
    this.presenter.pause()
  }


  onFilterUsersChange(term) {
    this.presenter.filterUsers(term)
  }

  render() {
    return (
      <div>
        <TitleBar title={"User List"}/>
        <SearchBar onSearch={this.onFilterUsersChange.bind(this)}/>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}


export default UserListView;





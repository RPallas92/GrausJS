import React, { Component } from 'react';

import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';


class UserListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Ricardo Pallas",
          "image": "https://pbs.twimg.com/profile_images/477200866941087744/XrN09nWB.jpeg"
        },
        {
          id: 2,
          name: "Jorge Aznar",
          "image": "https://pbs.twimg.com/profile_images/727845681218629633/lC95DuwW.jpg"
        }

      ]
    };
  }

  filterUsers(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <TitleBar title={"User List"}/>
        <SearchBar onSearch={this.filterUsers.bind(this)}/>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}


export default UserListView;





import React from 'react';

import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <div> There are no users</div>;
  } else {
    return (
      <div>
        {
          users.map(user => (
            <div key={user.id}>
              <UserListItem user={user}/>
            </div>
          ))
        }
      </div>
    );
  }
};

export default UserList;
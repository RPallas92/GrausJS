import React from 'react';

const UserListItem = ({user}) => (
    <div>
      <img src={user.image}/>
      <p> {user.name} </p>
    </div>
);

export default UserListItem;
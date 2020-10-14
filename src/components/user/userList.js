import React from 'react';
import { useDispatch } from 'react-redux';

import { users } from '../../assets/dummy-data';
import { usersAdd } from '../../actions/user';
import { headerSet } from '../../actions/header';

import { User } from './user';

export const UserList = () => {
  const dispatch = useDispatch();
  dispatch(usersAdd(users));
  dispatch(headerSet('User'));
  return (
    <h1>{users.map(user => <User user={user} key={user.id} />)}</h1>
  );
};

import { USER_ADD, USERS_ADD } from '../../type';

export const userAdd = (payload) => ({
  type: USER_ADD,
  payload,
});

export const usersAdd = (payload) => ({
  type: USERS_ADD,
  payload,
});

import { createSelector } from 'reselect';

const userSelector = (state) => state && state.user;
const getUsers = (user) => user && user.users;
export const selectUsers = createSelector(userSelector, getUsers);

const getUserById = (state, id) => state && state.user && state.user.users[id];
export const selectUser = createSelector(
  getUserById,
  (user) => user
);

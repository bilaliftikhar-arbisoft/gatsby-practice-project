import { USER_ADD, USERS_ADD } from '../../type';

const INITIAL_STATE = {
  users: [],
};

export const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case USER_ADD: {
      return {
        ...state,
        users: [...state.users, actions.payload],
      };
    }
    case USERS_ADD: {
      return {
        ...state,
        users: [...state.users, ...actions.payload],
      };
    }
    default:
      return { ...state };
  }
};

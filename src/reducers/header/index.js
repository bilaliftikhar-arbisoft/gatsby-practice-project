import { HEADER_SET } from '../../type';

const INITIAL_STATE = {
  header: { title: '' },
};

export const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case HEADER_SET: {
      return {
        ...state,
        header: { title: actions.payload },
      };
    }
    default:
      return { ...state };
  }
};

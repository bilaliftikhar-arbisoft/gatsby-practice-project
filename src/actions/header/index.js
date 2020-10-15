import { HEADER_SET } from '../../type';

export const headerSet = (payload) => ({
  type: HEADER_SET,
  payload,
});

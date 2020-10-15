import { createSelector } from 'reselect';

const headerSelector = (state) => state && state.header;
const getTitle = (header) => header && header.header;
export const selectHeader = createSelector(headerSelector, getTitle);

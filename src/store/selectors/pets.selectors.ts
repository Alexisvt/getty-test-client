import { createSelector } from 'reselect';

import { AppState } from '..';

const petItemsSelector = (state: AppState) => state.pets.pets;

const petsSelector = createSelector(
  petItemsSelector,
  pets => pets
);

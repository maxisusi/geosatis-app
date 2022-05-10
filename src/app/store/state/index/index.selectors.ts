import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { IndexState } from './index.reducer';

export const selectIndex = (state: AppState) => state.index;

export const selectTotalIndex = createSelector(
  selectIndex,
  (state: IndexState) => state.index
);

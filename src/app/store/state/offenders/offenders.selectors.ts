import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { OffenderState } from './offenders.reducer';

export const selectOffenders = (state: AppState) => state.offenders;
export const selectAllOffenders = createSelector(
  selectOffenders,
  (state: OffenderState) => state.offenders
);

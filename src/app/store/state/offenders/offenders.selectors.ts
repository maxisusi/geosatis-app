import { createSelector } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from '../../app.state';
import { OffenderState } from './offenders.reducer';

export const selectOffenders = (state: AppState) => state.offenders;

// * Select all offenders
export const selectAllOffenders = createSelector(
  selectOffenders,
  (state: OffenderState) => state.offenders.slice(0, 5)
);

// * Select offender by ID
export const getOffenderById = (id: string) =>
  createSelector(selectOffenders, (state: OffenderState) => {
    return state.offenders.find((offender: Offender) => offender.id === id);
  });

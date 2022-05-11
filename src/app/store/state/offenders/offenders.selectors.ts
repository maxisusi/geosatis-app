import { createSelector } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from '../../app.state';
import { OffenderState } from './offenders.reducer';

export const selectOffenders = (state: AppState) => state.offenders;

// * Return all offenders
export const selectAllOffenders = createSelector(
  selectOffenders,
  (state: OffenderState) => state.offenders
);

// * Return offender by ID
export const getOffenderById = (id: string) =>
  createSelector(selectOffenders, (state: OffenderState) => {
    return state.offenders.find((offender: Offender) => offender.id === id);
  });

// * Return offenders by pagination
export const selectByPagination = (index: number) =>
  createSelector(
    selectOffenders,

    (state: OffenderState) => {
      const limit = 5;
      let min;
      let max;

      if (index === 0) {
        min = 0;
        max = limit;
        return state.offenders.slice(min, max);
      } else {
        max = (index + 1) * 5;
        min = max - limit;

        return state.offenders.slice(min, max);
      }
    }
  );

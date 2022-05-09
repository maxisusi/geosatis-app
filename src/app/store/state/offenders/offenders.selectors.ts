import { createSelector } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from '../../app.state';
import { OffenderState } from './offenders.reducer';

export const selectOffenders = (state: AppState) => state.offenders;

// * Select all offenders
export const selectAllOffenders = createSelector(
  selectOffenders,
  (state: OffenderState) => state.offenders
);

// * Select offender by ID
export const getOffenderById = (id: string) =>
  createSelector(selectOffenders, (state: OffenderState) => {
    return state.offenders.find((offender: Offender) => offender.id === id);
  });

// export const getFirstOffender = (
//   current: number,
//   { min = 1, total = 20, length = 5 } = {}
// ) =>
//   createSelector(selectOffenders, (state: OffenderState) => {
//     function getPagingRange() {
//       if (length > total) length = total;

//       let start = current - Math.floor(length / 2);
//       start = Math.max(start, min);
//       start = Math.min(start, min + total - length);

//       return Array.from({ length: length }, (el, i) => start + i);
//     }

//     getPagingRange(current, tot);
//   });

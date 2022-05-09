import { createAction, props } from '@ngrx/store';
import { Offender } from '../../../shared/application.models';

// * Add an offender
export const addOffender = createAction(
  '[Offender Page] Add Offender',
  props<{ payload: Offender }>()
);

// * Remove an offender
export const removeOffender = createAction(
  '[Offender Page] Remove Offender',
  props<{ id: string }>()
);
// * Update an offender
export const updateOffender = createAction(
  '[Offender Page] Update Offender',
  props<{ payload: Offender }>()
);

export const loadOffenders = createAction(
  '[Offender Page] Load Offenders',
  props<{ index: number; showAll?: boolean }>()
);

// * Handle offender load success
export const loadOffendersSuccess = createAction(
  '[Offender API] Success Loading Offenders',
  props<{ offendersData: Offender[] }>()
);

// * Handle offender load failure
export const loadOffendersFailure = createAction(
  '[Offender API] Failure Loading Offenders',
  props<{ error: string }>()
);

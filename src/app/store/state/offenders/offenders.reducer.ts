import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import {
  addOffender,
  loadOffenders,
  loadOffendersFailure,
  loadOffendersSuccess,
  removeOffender,
  updateOffender,
} from './offenders.actions';

export interface OffenderState {
  offenders: Offender[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: OffenderState = {
  offenders: [],
  error: null,
  status: 'pending',
};

export const offenderReducer = createReducer(
  initialState,

  // * Add an offender
  on(addOffender, (state, { payload }) => ({
    ...state,
    offenders: [...state.offenders, payload],
  })),

  // * Remove an offender
  on(removeOffender, (state, { id }) => ({
    ...state,
    offenders: state.offenders.filter((offender) => offender.id !== id),
  })),
  on(loadOffenders, (state, { index, showAll }) => ({
    ...state,
    status: 'loading',
  })),

  on(updateOffender, (state, { payload }) => ({
    ...state,
    offenders: [...state.offenders, payload],
  })),

  // * Handle offender load success
  on(loadOffendersSuccess, (state, { offendersData }) => ({
    ...state,
    offenders: offendersData,
    error: null,
    status: 'success',
  })),

  // * Handle offender load failure
  on(loadOffendersFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

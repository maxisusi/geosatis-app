import { createReducer, on } from '@ngrx/store';
import { onPageChange } from './index.actions';

export interface IndexState {
  index: number;
}

export const initialState: IndexState = {
  index: 0,
};

export const indexReducer = createReducer(
  initialState,

  on(onPageChange, (state, { index }) => ({
    ...state,
    index,
  }))
);

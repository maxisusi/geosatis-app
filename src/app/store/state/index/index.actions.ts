import { createAction, props } from '@ngrx/store';

export const onPageChange = createAction(
  '[Offender Page] Change Page',
  props<{ index: number }>()
);

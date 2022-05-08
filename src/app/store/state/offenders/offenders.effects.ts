import { Action, Store } from '@ngrx/store';
import { OffendersService } from 'src/app/services/offenders.service';
import { AppState } from '../../app.state';

import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addOffender,
  loadOffenders,
  loadOffendersFailure,
  loadOffendersSuccess,
} from './offenders.actions';
import {
  catchError,
  from,
  map,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { Offender } from 'src/app/shared/application.models';
import { Injectable } from '@angular/core';
import { selectAllOffenders } from './offenders.selectors';

@Injectable()
export class OffendersEffect {
  constructor(
    private readonly actions$: Actions,
    private store: Store<AppState>,
    private offendersService: OffendersService
  ) {}

  // * Run this function everytime a LoadOffender action is dispatched
  getOffenders$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadOffenders),
        switchMap(({ index }) =>
          from(
            this.offendersService.getOffenders(index).pipe(
              map((offenders) =>
                loadOffendersSuccess({ offendersData: offenders })
              ),
              catchError((error) => of(loadOffendersFailure({ error })))
            )
          )
        )
      ),
    { dispatch: true }
  );

  // * Run this function everytime a AddOffender action is dispatched

  addOffender$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addOffender),
        withLatestFrom(this.store.select(selectAllOffenders)),
        switchMap(([action]) =>
          from(this.offendersService.createOffender(action.payload))
        )
      ),
    { dispatch: false }
  );
}

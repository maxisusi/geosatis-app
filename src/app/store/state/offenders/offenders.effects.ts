import { Action, Store } from '@ngrx/store';
import { OffendersService } from 'src/app/services/offenders.service';
import { AppState } from '../../app.state';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadOffenders,
  loadOffendersFailure,
  loadOffendersSuccess,
} from './offenders.actions';
import { catchError, from, map, mergeMap, of, switchMap } from 'rxjs';
import { Offender } from 'src/app/shared/application.models';
import { Injectable } from '@angular/core';

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
        switchMap(() =>
          from(
            this.offendersService.getOffenders().pipe(
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
}

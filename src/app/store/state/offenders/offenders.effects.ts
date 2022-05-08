import { Action, Store } from '@ngrx/store';
import { OffendersService } from 'src/app/services/offenders.service';
import { AppState } from '../../app.state';

import { Actions, createEffect, ofType } from '@ngrx/effects';

export class OffendersEffect {
  constructor(
    private readonly actions$: Actions,
    private store: Store<AppState>,
    private offendersService: OffendersService
  ) {}

  // * Run this function everytime a LoadOffender action is dispatched

  loadOffenders$ = createEffect(())
}

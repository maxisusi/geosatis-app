import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';
import { selectPaginatedOffenders } from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css'],
})
export class OffendersComponent implements OnInit {
  public allOffenders$ = this.store.pipe(select(selectPaginatedOffenders));
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    // * Dispatch loading offender list
    this.store.dispatch(loadOffenders({ index: 1 }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';
import { selectAllOffenders } from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css'],
})
export class OffendersComponent implements OnInit {
  public allOffenders$ = this.store.select(selectAllOffenders);
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    // * Dispatch loading offender list
    this.store.dispatch(loadOffenders({ index: 1 }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';
import { selectAllOffenders } from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css'],
})
export class OffendersComponent implements OnInit {
  // public allOffenders$ = this.store.select();
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    // * Dispatch loading offender list
    this.store.dispatch(loadOffenders());
    console.log('test');
  }
}

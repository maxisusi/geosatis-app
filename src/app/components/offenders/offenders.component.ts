import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css'],
})
export class OffendersComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadOffenders());
    console.log('test');
  }
}

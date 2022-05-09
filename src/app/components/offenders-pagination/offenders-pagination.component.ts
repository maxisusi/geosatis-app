import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';

@Component({
  selector: 'app-offenders-pagination',
  templateUrl: './offenders-pagination.component.html',
  styleUrls: ['./offenders-pagination.component.css'],
})
export class OffendersPaginationComponent implements OnInit {
  public pageIndex: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // const firstOffender$ = this.store.select(getFirstOffender(1));
    // firstOffender$.subscribe((data) => console.log(data));
  }

  back(): void {
    this.pageIndex -= 1;
    this.store.dispatch(loadOffenders({ index: this.pageIndex }));
  }

  front(): void {
    this.pageIndex += 1;
    this.store.dispatch(loadOffenders({ index: this.pageIndex }));
  }
}

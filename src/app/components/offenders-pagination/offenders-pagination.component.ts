import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from 'src/app/store/app.state';
import { onPageChange } from 'src/app/store/state/index/index.actions';
import { selectAllOffenders } from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders-pagination',
  templateUrl: './offenders-pagination.component.html',
  styleUrls: ['./offenders-pagination.component.css'],
})
export class OffendersPaginationComponent implements OnInit {
  pageIndex: number = 0;
  disabledBack!: boolean;
  disabledFront!: boolean;
  pageLimit!: number;
  pageDisplayLimit: number = 5;
  allOffenders$ = this.store.pipe(select(selectAllOffenders));
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.disabledBack = true;

    this.allOffenders$.subscribe((offenders: Offender[]) => {
      // * Define the page limit for pagination
      this.pageLimit =
        offenders.length % this.pageDisplayLimit === 0
          ? Math.floor(offenders.length / this.pageDisplayLimit) - 1
          : Math.floor(offenders.length / this.pageDisplayLimit);

      // * If index of the current page is equal or greater than the page limit, freeze front button
      if (this.pageIndex >= this.pageLimit) {
        this.disabledFront = true;
      } else {
        this.disabledFront = false;
      }
    });
  }

  back(): void {
    this.pageIndex -= 1;
    this.disabledFront = false;

    // * If the index of the page reaches 0 disable back button
    if (this.pageIndex === 0) {
      this.disabledBack = true;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    } else {
      this.disabledBack = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }
  }

  front(): void {
    this.pageIndex += 1;

    // * If the index of the page reaches 0 disable back button
    if (this.pageIndex > 0) {
      this.disabledBack = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }

    // * If the index of page reaches the page limit, disable front button
    if (this.pageIndex === this.pageLimit) {
      this.disabledFront = true;
    }
  }
}

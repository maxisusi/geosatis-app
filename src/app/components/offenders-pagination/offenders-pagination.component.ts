import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from 'src/app/store/app.state';
import { onPageChange } from 'src/app/store/state/index/index.actions';
import { selectAllOffenders } from 'src/app/store/state/offenders/offenders.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offenders-pagination',
  templateUrl: './offenders-pagination.component.html',
  styleUrls: ['./offenders-pagination.component.css'],
})
export class OffendersPaginationComponent implements OnInit {
  pageIndex: number = 0;
  disabledBackButton!: boolean;
  disabledNextButton!: boolean;
  pageLimit!: number;
  pageDisplayLimit: number = environment.pageLimit;
  allOffenders$ = this.store.pipe(select(selectAllOffenders));
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.disabledBackButton = true;

    this.initPagination();
  }

  /**
   * Initialize the pagination system
   * Defines how many page to create
   */

  initPagination(): void {
    this.allOffenders$.subscribe((offenders: Offender[]) => {
      // * Defines the number of page to create
      this.pageLimit =
        offenders.length % this.pageDisplayLimit === 0
          ? Math.floor(offenders.length / this.pageDisplayLimit) - 1
          : Math.floor(offenders.length / this.pageDisplayLimit);

      // * If index of the current page is equal or greater than the page limit, freeze next button
      if (this.pageIndex >= this.pageLimit) {
        this.disabledNextButton = true;
      } else {
        this.disabledNextButton = false;
      }
    });
  }

  // * Triggers when user click on the back button <-
  back(): void {
    this.pageIndex -= 1;
    this.disabledNextButton = false;

    // * If the index of the page reaches 0, disable back button
    if (this.pageIndex === 0) {
      this.disabledBackButton = true;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    } else {
      this.disabledBackButton = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }
  }

  // * Triggers when user click on the next button ->
  next(): void {
    this.pageIndex += 1;

    // * If the index of the page reaches 0, disable back button
    if (this.pageIndex > 0) {
      this.disabledBackButton = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }

    // * If the index of page reaches the page limit, disable next button
    if (this.pageIndex === this.pageLimit) {
      this.disabledNextButton = true;
    }
  }
}

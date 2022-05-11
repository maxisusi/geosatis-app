import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { onPageChange } from 'src/app/store/state/index/index.actions';

@Component({
  selector: 'app-offenders-pagination',
  templateUrl: './offenders-pagination.component.html',
  styleUrls: ['./offenders-pagination.component.css'],
})
export class OffendersPaginationComponent implements OnInit {
  public pageIndex: number = 0;
  disabled!: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.disabled = true;
    // const firstOffender$ = this.store.select(getFirstOffender(1));
    // firstOffender$.subscribe((data) => console.log(data));
  }

  back(): void {
    this.pageIndex -= 1;

    console.log(this.pageIndex);
    if (this.pageIndex === 0) {
      this.disabled = true;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    } else {
      this.disabled = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }
  }

  front(): void {
    this.pageIndex += 1;
    console.log(this.pageIndex);

    if (this.pageIndex > 0) {
      this.disabled = false;
      this.store.dispatch(onPageChange({ index: this.pageIndex }));
    }
  }
}

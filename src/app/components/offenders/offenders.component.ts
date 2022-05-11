import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from 'src/app/store/app.state';
import { selectTotalIndex } from 'src/app/store/state/index/index.selectors';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';
import { selectByPagination } from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.css'],
})
export class OffendersComponent implements OnInit {
  private indexPage$ = this.store.pipe(select(selectTotalIndex));
  public allOffenders$!: Observable<Offender[]>;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    // * Dispatch loading offender list
    this.store.dispatch(loadOffenders());

    this.indexPage$.subscribe((index) => {
      this.allOffenders$ = this.store.pipe(select(selectByPagination(index)));
    });
  }
}

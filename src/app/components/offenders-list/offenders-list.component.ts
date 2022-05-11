import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from 'src/app/store/app.state';
import { getOffenderById } from 'src/app/store/state/offenders/offenders.selectors';
import { CreateOffendersModalComponent } from '../create-offenders-modal/create-offenders-modal.component';

@Component({
  selector: 'app-offenders-list',
  templateUrl: './offenders-list.component.html',
  styleUrls: ['./offenders-list.component.css'],
})
export class OffendersListComponent implements OnInit {
  @Input() offender!: Offender;

  constructor(
    private readonly store: Store<AppState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openEditModal(id: any): void {
    let offender: Offender | undefined;

    // * Get Offender by ID - Used to update offender
    const data$ = this.store.select(getOffenderById(id));
    data$.subscribe((offenderData) => (offender = offenderData));

    // * Open Modal with payload to populate it
    this.dialog.open(CreateOffendersModalComponent, { data: offender });
  }
}

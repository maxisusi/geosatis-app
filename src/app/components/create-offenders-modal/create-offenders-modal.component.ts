import { Component, OnInit } from '@angular/core';
import { OffendersService } from 'src/app/services/offenders.service';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addOffender } from 'src/app/store/state/offenders/offenders.actions';

@Component({
  selector: 'app-create-offenders-modal',
  templateUrl: './create-offenders-modal.component.html',
  styleUrls: ['./create-offenders-modal.component.css'],
})
export class CreateOffendersModalComponent implements OnInit {
  constructor(
    public readonly offenders: OffendersService,
    private readonly dialog: MatDialog,
    private readonly store: Store<AppState>
  ) {}

  locations = [
    {
      id: 1,
      value: 'Location 1',
      location: { lat: '4.22222', long: '2.3333' },
    },
    {
      id: 2,
      value: 'Location 2',
      location: { lat: '8.22222', long: '1.3333' },
    },
    { id: 3, value: 'Location 3' },
    { lat: '2.22222', long: '9.3333' },
  ];
  ngOnInit(): void {
    // Reset form
    this.offenders.initalizeFormGroup();
  }
  onSubmit(): void {
    // this.dialog.closeAll();

    this.store.dispatch(addOffender({ payload: this.offenders.getFormData() }));
  }
}

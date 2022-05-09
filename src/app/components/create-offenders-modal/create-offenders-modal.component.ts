import { Component, OnInit, Inject } from '@angular/core';
import { OffendersService } from 'src/app/services/offenders.service';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  addOffender,
  updateOffender,
} from 'src/app/store/state/offenders/offenders.actions';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Offender } from 'src/app/shared/application.models';

@Component({
  selector: 'app-create-offenders-modal',
  templateUrl: './create-offenders-modal.component.html',
  styleUrls: ['./create-offenders-modal.component.css'],
})
export class CreateOffendersModalComponent implements OnInit {
  constructor(
    public readonly offenders: OffendersService,
    private readonly dialog: MatDialog,
    private readonly store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  locations = [
    {
      id: 1,
      value: 'Location 1',
      location: { lat: 4.22222, long: 2.3333 },
    },
    {
      id: 2,
      value: 'Location 2',
      location: { lat: 8.22222, long: 1.3333 },
    },
    { id: 3, value: 'Location 3' },
    { lat: 2.22222, long: 9.3333 },
  ];
  ngOnInit(): void {
    // Reset form
    this.offenders.initalizeFormGroup();

    // * If there are some datas, inject them insde the modal
    if (this.data) {
      console.log('There are som data');

      this.offenders.populateFormGroup(this.data);
    }
  }
  onSubmit(): void {
    // * If the form is valid, dispatch data, reset form and close modal
    if (this.offenders.validateForm()) {
      // * If true, dispatch action to update offender
      if (this.data) {
        const { birthdate, firstName, imgURL, lastName, location, $key } =
          this.offenders.getFormData();

        const finalOffender = {
          id: $key,
          firstName,
          lastName,
          birthdate,
          imgURL,
          location,
        };

        console.log(finalOffender);
        // this.store.dispatch(updateOffender({ payload: finalOffender }));
      } else {
        // * Dispatch action to create an offender

        const { birthdate, firstName, imgURL, lastName, location, $key } =
          this.offenders.getFormData();
        const finalOffender = {
          id: $key,
          firstName,
          lastName,
          birthdate,
          imgURL: 'https://source.unsplash.com/800x800/?face',
          location: {
            lat: 46.132335832224506,
            long: 7.075798217929714,
          },
        };

        this.store.dispatch(addOffender({ payload: finalOffender }));
      }

      // * Reset form
      this.offenders.initalizeFormGroup();

      // * Close Modal
      this.dialog.closeAll();
    }
  }
}

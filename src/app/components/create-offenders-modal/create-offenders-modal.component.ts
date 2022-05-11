import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { OffendersService } from 'src/app/services/offenders.service';
import { AppState } from 'src/app/store/app.state';
import {
  addOffender,
  updateOffender,
} from 'src/app/store/state/offenders/offenders.actions';
import { v4 as uuidv4 } from 'uuid';

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

  // * Locations list that the user can select
  locations = [
    {
      id: 1,
      value: 'Geosatis - Le Noirmont',
      coordinates: { lat: 47.22758152838231, long: 6.957354031577179 },
    },
    {
      id: 2,
      value: 'Geosatis - Lausanne',
      coordinates: { lat: 46.518092188316984, long: 6.562308695565504 },
    },
    {
      id: 3,
      value: 'Bière Barracks',
      coordinates: { lat: 46.52969568324943, long: 6.338179910221164 },
    },
    {
      id: 4,
      value: 'Bure Barracks',
      coordinates: { lat: 47.45313434792769, long: 7.010516505371007 },
    },
    {
      id: 5,
      value: 'University Campus of Geneva',
      coordinates: { lat: 46.187049353791274, long: 6.159023910244823 },
    },

    {
      id: 6,
      value: 'Base - Vevey',
      coordinates: { lat: 46.46194244121148, long: 6.840651156969183 },
    },
    {
      id: 7,
      value: 'Sport Center - Verbier',
      coordinates: { lat: 46.09926011768908, long: 7.21985050034541 },
    },
    {
      id: 8,
      value: 'Sport Center - Verbier',
      coordinates: { lat: 46.09926011768908, long: 7.21985050034541 },
    },
    {
      id: 9,
      value: 'Versegeres Village',
      coordinates: { lat: 46.0634926426249, long: 7.2372679239936675 },
    },
    {
      id: 10,
      value: 'Area 51',
      coordinates: { lat: 37.2431, long: 115.793 },
    },
    {
      id: 11,
      value: 'The Pentagon',
      coordinates: { lat: 38.87269209521415, long: -77.05622398413922 },
    },
  ];

  ngOnInit(): void {
    // * Reset form
    this.offenders.initalizeFormGroup();

    // * If user wants to update offender's data, inject them insde the modal
    if (this.data) {
      this.offenders.populateFormGroup(this.data);
    }
  }

  /**
   * Submit the modal form
   * This function either creates a new offender or update one
   */

  onSubmit(): void {
    // * Checks if the form is valid
    if (this.offenders.validateForm()) {
      // * Checks if the user wants to update an offender
      if (this.data) {
        const { birthdate, firstName, imgURL, lastName, location, $key } =
          this.offenders.getFormData();

        // * Format the offender
        const offender = {
          id: $key,
          firstName,
          lastName,
          birthdate,
          imgURL,
          location: this.locations[location - 1],
        };
        this.store.dispatch(updateOffender({ payload: offender }));
      }

      // * Checks if the user wants to create an offender
      else {
        const { birthdate, firstName, lastName, location, imgURL } =
          this.offenders.getFormData();

        // * Checks if the user added a custom image. If not, we add a placeholder from unsplash API
        let profileImage: string;
        if (!imgURL.length) {
          profileImage = `https://source.unsplash.com/${(
            Math.random() * (700 - 1000 + 1) +
            700
          ).toFixed()}x${(
            Math.random() * (700 - 1000 + 1) +
            700
          ).toFixed()}/?face`;
        } else {
          profileImage = imgURL;
        }

        // * Format the offender
        const offender = {
          id: uuidv4(),
          firstName,
          lastName,
          birthdate,
          imgURL: profileImage,
          location: this.locations[location - 1],
        };

        this.store.dispatch(addOffender({ payload: offender }));
      }

      // * Reset form
      this.offenders.initalizeFormGroup();

      // * Close Modal
      this.dialog.closeAll();
    }
  }
}

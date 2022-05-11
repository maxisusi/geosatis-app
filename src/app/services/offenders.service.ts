import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offender } from '../shared/application.models';

interface OffenderForm {
  $key: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  location: number;
  imgURL: string;
}

@Injectable({
  providedIn: 'root',
})
export class OffendersService {
  // todo put the url on .env file
  apiUrl = 'http://localhost:4500/offenders';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Helper functions
   */

  // * Initialize form input and validation
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl(''),
    location: new FormControl(null, Validators.required),
    imgURL: new FormControl(''),
  });

  // * Return the state of validation of the form
  validateForm(): boolean {
    return this.form.valid;
  }

  // * Reset the form
  initalizeFormGroup(): void {
    this.form.reset({
      $key: null,
      fullName: '',
      lastName: '',
      birthdate: '',
      location: null,
      imgURL: '',
    });
  }

  // * Populate data of offenders when we want to update an offender
  populateFormGroup(offenders: Offender): void {
    this.form.setValue({
      $key: offenders.id,
      firstName: offenders.firstName,
      lastName: offenders.lastName,
      birthdate: offenders.birthdate,
      location: offenders.location.id,
      imgURL: offenders.imgURL,
    });
  }

  // * Collect the data from the form - Espacially used to populate the modal for updating an offender
  getFormData(): OffenderForm {
    return this.form.getRawValue();
  }

  /**
   * API CALLS
   */

  getOffenders(): Observable<Offender[]> {
    return this.http.get<Offender[]>(this.apiUrl);
  }

  createOffender(offender: Offender): Observable<Offender> {
    return this.http.post<Offender>(this.apiUrl, offender, this.httpOptions);
  }

  updateOffender(offender: Offender): Observable<Offender> {
    console.log(offender.id);
    return this.http.put<Offender>(`${this.apiUrl}/${offender.id}`, offender);
  }
}

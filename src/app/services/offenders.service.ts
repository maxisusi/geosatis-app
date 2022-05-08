import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offender } from '../shared/application.models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class OffendersService {
  private apiUrl = 'http://localhost:4500/offenders';
  constructor(private http: HttpClient) {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl(''),
    location: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
  });

  initalizeFormGroup(): void {
    this.form.setValue({
      $key: null,
      fullName: '',
      lastName: '',
      birthdate: '',
      location: '',
      profileImage: '',
    });
  }

  getOffenders(): Observable<Offender[]> {
    return this.http.get<Offender[]>(this.apiUrl);
  }

  getFormData(): Offender {
    // * Removing the key attribute
    const rawFormValue = this.form.getRawValue();
    delete rawFormValue['$key'];

    // * Generating an unique ID
    const newOffender: Offender = { id: uuidv4(), ...rawFormValue };

    return newOffender;
  }

  createOffender(offender: Offender): Observable<Offender> {
    console.log(offender);
    return this.http.get<Offender>(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offender } from '../shared/application.models';

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

  createOffender(): void {
    const newOffender = { id: 123, ...this.form.getRawValue() };

    console.log(newOffender);
    // console.log(this.form.getRawValue());
    // return this.http.post<Offender>(this.apiUrl, )
  }
}

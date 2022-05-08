import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offender } from '../shared/application.models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class OffendersService {
  private apiUrl = 'http://localhost:3000/offenders';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl(''),
    location: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
  });

  initalizeFormGroup(): void {
    this.form.reset({
      $key: null,
      fullName: '',
      lastName: '',
      birthdate: '',
      location: '',
      profileImage: '',
    });
  }

  validateForm(): boolean {
    return this.form.valid;

    this.form.reset;
  }

  getOffenders(): Observable<Offender[]> {
    return this.http.get<Offender[]>(this.apiUrl);
  }

  getFormData(): Offender {
    // * Removing the key attribute
    const rawFormValue = this.form.getRawValue();
    delete rawFormValue['$key'];
    delete rawFormValue['location'];
    delete rawFormValue['imageURL'];

    const newLocation = {
      lat: '46.132335832224506 ',
      long: '7.075798217929714',
    };

    // * Generating an unique ID
    const newOffender: Offender = {
      id: uuidv4(),
      ...rawFormValue,
      location: newLocation,
      imgURL: 'https://source.unsplash.com/800x800/?face',
    };

    return newOffender;
  }

  createOffender(offender: Offender): Observable<Offender> {
    console.log(offender);
    return this.http.post<Offender>(this.apiUrl, offender, this.httpOptions);
  }
}

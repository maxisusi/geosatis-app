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
  private apiUrl = 'http://localhost:4500/offenders';
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

  // * Populate data of offenders when we want to update an offender
  populateFormGroup(offenders: Offender): void {
    this.form.setValue({
      $key: offenders.id,
      firstName: offenders.firstName,
      lastName: offenders.lastName,
      birthdate: offenders.birthdate,
      location: offenders.location,
      profileImage: offenders.imgURL,
    });
  }

  validateForm(): boolean {
    return this.form.valid;
  }

  getOffenders(index: number, showAll?: boolean): Observable<Offender[]> {
    if (showAll) {
      return this.http.get<Offender[]>(`${this.apiUrl}`);
    }
    return this.http.get<Offender[]>(`${this.apiUrl}?_page=${index}&_limit=5`);
  }

  //todo: Update this function to prevent regenerate id
  getFormData(): any {
    return this.form.getRawValue();
  }

  createOffender(offender: Offender): Observable<Offender> {
    const rawValues: any = offender;
    delete rawValues['$key'];

    // TEMPORARY
    delete rawValues['location'];
    delete rawValues['imgURL'];

    const newLocation = {
      lat: '46.132335832224506',
      long: '7.075798217929714',
    };

    // * Object Redefinition
    const formValues: Offender = {
      id: uuidv4(),
      ...rawValues,
      location: newLocation,
      imgURL: 'https://source.unsplash.com/800x800/?face',
    };

    return this.http.post<Offender>(this.apiUrl, formValues, this.httpOptions);
  }

  updateOffender(offender: Offender): Observable<Offender> {
    console.log(offender.id);
    return this.http.put<Offender>(`${this.apiUrl}/${offender.id}`, offender);
  }
}

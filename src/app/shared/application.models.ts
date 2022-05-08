// Offenders Object definition
export interface Offender {
  id?: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  location: Location;
  imgURL: string;
}

export interface Location {
  lat: number;
  long: number;
}

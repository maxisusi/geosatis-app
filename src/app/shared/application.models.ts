// Offenders Object definition
export interface Offender {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  location: Location;
  imgURL: string;
}

export interface Location {
  lat: string;
  long: string;
}

export interface PaginatedResult<T> {
  result: T;
  pagination: 'first' | 'next' | 'last' | 'prev' | null;
}

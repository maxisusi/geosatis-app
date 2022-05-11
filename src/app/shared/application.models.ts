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
  id: number;
  value: string;
  coordinates: Coordinates;
}

interface Coordinates {
  lat: number;
  long: number;
}

export interface PaginatedResult<T> {
  result: T;
  pagination: 'first' | 'next' | 'last' | 'prev' | null;
}

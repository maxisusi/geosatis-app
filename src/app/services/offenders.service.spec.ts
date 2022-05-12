import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OffendersService } from './offenders.service';
import { Offender } from '../shared/application.models';

describe('OffendersService', () => {
  let service: OffendersService;
  let httpClient: HttpClient;
  let httpHandler: HttpHandler;

  let offenderListMock: Offender = {
    id: '1edf1124-8de3-44d3-812a-93340080ace1',
    firstName: 'John',
    lastName: 'Doe',
    birthdate: '2022-05-01T22:00:00.000Z',
    imgURL: 'https://source.unsplash.com/551x536/?face',
    location: {
      id: 6,
      value: 'Base - Vevey',
      coordinates: {
        lat: 46.46194244121148,
        long: 6.840651156969183,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HttpClient, OffendersService, HttpHandler],
    });
    service = TestBed.inject(OffendersService);

    httpClient = TestBed.inject(HttpClient);
    httpHandler = TestBed.inject(HttpHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not validate the form', () => {
    let failedOffenderMock: Offender = {
      id: '1edf1124-8de3-44d3-812a-93340080ace1',
      firstName: '',
      lastName: '',
      birthdate: '2022-05-01T22:00:00.000Z',
      imgURL: 'https://source.unsplash.com/551x536/?face',
      location: {
        id: 6,
        value: 'Base - Vevey',
        coordinates: {
          lat: 46.46194244121148,
          long: 6.840651156969183,
        },
      },
    };
    service.populateFormGroup(failedOffenderMock);
    expect(service.validateForm()).toBeFalse();
  });
});

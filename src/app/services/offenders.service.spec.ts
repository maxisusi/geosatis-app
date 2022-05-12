import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OffendersService } from './offenders.service';

describe('OffendersService', () => {
  let service: OffendersService;
  let httpClient: HttpClient;
  let httpHandler: HttpHandler;

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
});

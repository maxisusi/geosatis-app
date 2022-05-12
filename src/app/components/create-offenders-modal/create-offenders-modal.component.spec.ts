import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffendersService } from 'src/app/services/offenders.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CreateOffendersModalComponent } from './create-offenders-modal.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Offender } from 'src/app/shared/application.models';

describe('CreateOffendersModalComponent', () => {
  let component: CreateOffendersModalComponent;
  let fixture: ComponentFixture<CreateOffendersModalComponent>;

  let httpClient: HttpClient;
  let httpHandler: HttpHandler;
  // let store: MockStore;

  let offenderListMock: Offender = {
    id: '1edf1124-8de3-44d3-812a-93340080ace1',
    firstName: 'Max',
    lastName: 'balej',
    birthdate: '01/10/22',
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        OffendersService,
        HttpClient,
        HttpHandler,
        provideMockStore({}),
        { provide: MAT_DIALOG_DATA, useValue: { ...offenderListMock } },
      ],
      declarations: [CreateOffendersModalComponent],
    }).compileComponents();

    // matData = TestBed.inject(MAT_DIALOG_DATA);

    // store = TestBed.inject(MockStore);

    httpClient = TestBed.inject(HttpClient);
    httpHandler = TestBed.inject(HttpHandler);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffendersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validates the component', () => {});
});

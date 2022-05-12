import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { OffendersService } from 'src/app/services/offenders.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CreateOffendersModalComponent } from './create-offenders-modal.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Offender } from 'src/app/shared/application.models';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CreateOffendersModalComponent', () => {
  let component: CreateOffendersModalComponent;
  let fixture: ComponentFixture<CreateOffendersModalComponent>;
  let de: DebugElement;

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

    httpClient = TestBed.inject(HttpClient);
    httpHandler = TestBed.inject(HttpHandler);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffendersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains necessary form fields', () => {
    const firstNameField: DebugElement = de.query(By.css('#FirstName'));
    const lastName: DebugElement = de.query(By.css('#LastName'));
    const location: DebugElement = de.query(By.css('#Location'));
    const birthdate: DebugElement = de.query(By.css('#Birthday'));
    const profileImage: DebugElement = de.query(By.css('#Image'));

    expect(firstNameField).toBeTruthy();
    expect(lastName).toBeTruthy();
    expect(location).toBeTruthy();
    expect(birthdate).toBeTruthy();
    expect(profileImage).toBeTruthy();
  });

  it('should render an error message when fields are empty', () => {
    component.onSubmit();
    const errorMessage: DebugElement = de.query(By.css('mat-error'));
    expect(errorMessage.nativeElement.innerText).toContain(
      'First Name is mandatory'
    );
  });
});

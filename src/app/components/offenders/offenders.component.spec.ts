import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Offender } from 'src/app/shared/application.models';
import {
  selectAllOffenders,
  selectByPagination,
} from 'src/app/store/state/offenders/offenders.selectors';
import { OffendersComponent } from './offenders.component';

describe('OffendersComponent', () => {
  let component: OffendersComponent;
  let fixture: ComponentFixture<OffendersComponent>;
  let store: MockStore;

  let offenderListMock: Offender[] = [
    {
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
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            offenders: { offenderListMock },
          },
        }),
      ],
      declarations: [OffendersComponent],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

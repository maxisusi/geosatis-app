import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OffendersListComponent } from './offenders-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Offender } from 'src/app/shared/application.models';
import {
  selectAllOffenders,
  selectByPagination,
} from 'src/app/store/state/offenders/offenders.selectors';

describe('OffendersListComponent', () => {
  let component: OffendersListComponent;
  let fixture: ComponentFixture<OffendersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [provideMockStore({})],
      declarations: [OffendersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersListComponent);
    component = fixture.componentInstance;

    component.offender = {
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

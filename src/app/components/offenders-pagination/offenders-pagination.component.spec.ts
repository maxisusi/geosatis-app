import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OffendersPaginationComponent } from './offenders-pagination.component';
import { MatIconModule } from '@angular/material/icon';

describe('OffendersPaginationComponent', () => {
  let component: OffendersPaginationComponent;
  let fixture: ComponentFixture<OffendersPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      providers: [provideMockStore({})],
      declarations: [OffendersPaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

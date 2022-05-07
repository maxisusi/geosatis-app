import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersPaginationComponent } from './offenders-pagination.component';

describe('OffendersPaginationComponent', () => {
  let component: OffendersPaginationComponent;
  let fixture: ComponentFixture<OffendersPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersPaginationComponent ]
    })
    .compileComponents();
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

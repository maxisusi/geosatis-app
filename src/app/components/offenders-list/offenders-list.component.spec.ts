import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersListComponent } from './offenders-list.component';

describe('OffendersListComponent', () => {
  let component: OffendersListComponent;
  let fixture: ComponentFixture<OffendersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

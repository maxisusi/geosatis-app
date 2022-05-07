import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersComponent } from './offenders.component';

describe('OffendersComponent', () => {
  let component: OffendersComponent;
  let fixture: ComponentFixture<OffendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersComponent ]
    })
    .compileComponents();
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

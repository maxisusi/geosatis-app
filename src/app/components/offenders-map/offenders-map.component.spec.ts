import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersMapComponent } from './offenders-map.component';

describe('OffendersMapComponent', () => {
  let component: OffendersMapComponent;
  let fixture: ComponentFixture<OffendersMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

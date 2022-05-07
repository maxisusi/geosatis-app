import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffendersModalComponent } from './create-offenders-modal.component';

describe('CreateOffendersModalComponent', () => {
  let component: CreateOffendersModalComponent;
  let fixture: ComponentFixture<CreateOffendersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOffendersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffendersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

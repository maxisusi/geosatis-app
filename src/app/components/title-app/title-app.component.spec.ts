import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAppComponent } from './title-app.component';

describe('TitleAppComponent', () => {
  let component: TitleAppComponent;
  let fixture: ComponentFixture<TitleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

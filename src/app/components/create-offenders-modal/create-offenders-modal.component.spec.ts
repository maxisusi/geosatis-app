import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffendersService } from 'src/app/services/offenders.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateOffendersModalComponent } from './create-offenders-modal.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CreateOffendersModalComponent', () => {
  let component: CreateOffendersModalComponent;
  let fixture: ComponentFixture<CreateOffendersModalComponent>;

  let matData: any;
  let dialog: MatDialog;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MAT_DIALOG_DATA],
      providers: [OffendersService, provideMockStore({}), MatDialog],
      declarations: [CreateOffendersModalComponent],
    }).compileComponents();

    matData = TestBed.inject(MAT_DIALOG_DATA);
    dialog = TestBed.inject(MatDialog);
    // store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffendersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validates the component', () => {});
});

import { Component, OnInit } from '@angular/core';
import { OffendersService } from 'src/app/services/offenders.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-offenders-modal',
  templateUrl: './create-offenders-modal.component.html',
  styleUrls: ['./create-offenders-modal.component.css'],
})
export class CreateOffendersModalComponent implements OnInit {
  constructor(
    public readonly offenders: OffendersService,
    private readonly dialog: MatDialog
  ) {}

  locations = [
    { id: 1, value: 'Location 1' },
    { id: 2, value: 'Location 2' },
    { id: 3, value: 'Location 3' },
  ];
  ngOnInit(): void {
    // Reset form
    this.offenders.initalizeFormGroup();
  }
  onSubmit(): void {
    this.dialog.closeAll();
  }
}

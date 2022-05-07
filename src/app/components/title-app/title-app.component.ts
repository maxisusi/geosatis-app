import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateOffendersModalComponent } from '../create-offenders-modal/create-offenders-modal.component';

@Component({
  selector: 'app-title-app',
  templateUrl: './title-app.component.html',
  styleUrls: ['./title-app.component.css'],
})
export class TitleAppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(CreateOffendersModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    // const dialogRef = this.dialog.open(CreateOffendersModalComponent);
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

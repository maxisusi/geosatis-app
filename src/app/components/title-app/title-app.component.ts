import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-title-app',
  templateUrl: './title-app.component.html',
  styleUrls: ['./title-app.component.css'],
})
export class TitleAppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    console.log('Called');
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

import { Component, OnInit } from '@angular/core';
import { Moment, MomentTimezone } from 'moment-timezone';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment-timezone';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  date: any = new Date();
  ticker$ = interval(1000);

  ngOnInit(): void {
    let newDate: any = '';
    this.ticker$.subscribe(() => {
      this.date = moment().tz('Australia/Sydney').format('h:mm:ss a');
      console.log(newDate);
    });
  }
}

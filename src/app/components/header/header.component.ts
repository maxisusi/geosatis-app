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
  selectedTimeZone = 'Europe/Madrid';

  // * Add timezone
  timezoneList = [
    { name: 'Europe / Madrid', code: 'Europe/Madrid' },
    { name: 'America / New York', code: 'America/New_York' },
  ];

  selectTimeZone(timezone: any): void {
    this.selectedTimeZone = timezone;
  }

  ngOnInit(): void {
    this.ticker$.subscribe(() => {
      this.date = moment().tz(this.selectedTimeZone).format('h:mm:ss a');
    });
  }
}

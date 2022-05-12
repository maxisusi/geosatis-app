import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  todayDate: any = new Date();
  ticker$ = interval(1000);
  selectedTimeZone = 'Europe/Madrid';
  constructor() {}

  // * Timezone list available
  timezoneList = [
    { name: 'Europe / Madrid', code: 'Europe/Madrid' },
    { name: 'America / New York', code: 'America/New_York' },
  ];

  ngOnInit(): void {
    this.ticker$.subscribe(() => {
      this.todayDate = moment().tz(this.selectedTimeZone).format('h:mm:ss a');
    });
  }

  selectTimeZone(timezone: any): void {
    this.selectedTimeZone = timezone;
  }
}

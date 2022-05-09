import { Component, OnInit } from '@angular/core';
import { Moment, MomentTimezone } from 'moment-timezone';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  date = new Date().toString();
  ticker$ = interval(1000);

  ngOnInit(): void {
    this.ticker$.subscribe(() => {
      this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Offender } from 'src/app/shared/application.models';

@Component({
  selector: 'app-offenders-list',
  templateUrl: './offenders-list.component.html',
  styleUrls: ['./offenders-list.component.css'],
})
export class OffendersListComponent implements OnInit {
  @Input() offender!: Offender;

  constructor() {}

  ngOnInit(): void {}
}

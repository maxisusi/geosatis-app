import { Component, OnInit } from '@angular/core';
import { OffendersService } from 'src/app/services/offenders.service';

@Component({
  selector: 'app-create-offenders-modal',
  templateUrl: './create-offenders-modal.component.html',
  styleUrls: ['./create-offenders-modal.component.css'],
})
export class CreateOffendersModalComponent implements OnInit {
  constructor(public readonly offenders: OffendersService) {}

  ngOnInit(): void {}
}

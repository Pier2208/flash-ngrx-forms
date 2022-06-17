import { Component, Input, OnInit } from '@angular/core';
import { FormControlState } from 'ngrx-forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() control: any;
  @Input() error: any;
  constructor() {}

  ngOnInit(): void {
    console.log('error', this.error)
  }
}

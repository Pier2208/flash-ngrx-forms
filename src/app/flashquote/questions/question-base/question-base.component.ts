import { Component, Input, OnInit } from '@angular/core';
import { FormControlState } from 'ngrx-forms';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styleUrls: ['./question-base.component.scss'],
})
export class QuestionBaseComponent implements OnInit {
  @Input() question: Question;
  @Input() control: FormControlState<any>;
  constructor() {}

  ngOnInit(): void {}
}

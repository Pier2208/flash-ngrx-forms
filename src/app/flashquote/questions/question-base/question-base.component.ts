import { SimpleChanges } from '@angular/core';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { FormControlState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styleUrls: ['./question-base.component.scss'],
})
export class QuestionBaseComponent implements OnInit {
  @Input() question: Question;
  @Input() control: FormControlState<any>;
  @Input() error: any;
  constructor() {}

  ngOnInit(): void {}
}

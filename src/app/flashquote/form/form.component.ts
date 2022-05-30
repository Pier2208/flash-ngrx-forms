import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Question } from '../models/Question';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formState$: Observable<any>;
  questions: Question[];
  submittedValue$: Observable<any | undefined>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select((s) => {
      return s.form.formState
    }));
    this.store.subscribe(state => {
      if(state.form.questions) {
        this.questions = state.form.questions
      } else {
        console.log('ohoho')
      }
    })
    
    this.submittedValue$ = this.store.pipe(
      select((s) => s.form.formState.submittedValue)
    );
  }
}

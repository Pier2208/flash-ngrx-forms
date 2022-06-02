import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Question } from '../models/Question';
import { ResetAction, SetValueAction } from 'ngrx-forms';
import { setSubmittedValue } from '../store/flashquote.actions';
import { filter, map, take } from 'rxjs/operators';
import { FormValue, SetSubmittedValueAction } from '../store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formState$: Observable<any>;
  questions: Question[];
  submittedValue$: Observable<FormValue | undefined>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.formState$ = this.store.pipe(
      select((s) => s.form.formState)
    );

    this.store.subscribe((state) => {
      this.questions = state.form.questions;
    });

    this.submittedValue$ = this.store.pipe(
      select((s) => s.form.submittedValue)
    );
  }

  submit() {
    this.formState$
      .pipe(
        take(1),
        filter((state) => state.isValid),
        map((form) => {
          console.log('form value', form.value)
          return new SetSubmittedValueAction(form.value)
        })
      )
      .subscribe(this.store);

    // dispatch action to set the form as pristine, untouched and unsubmitted
    //this.store.dispatch(new ResetAction(INITIAL_STATE.id));
    // this.store.dispatch(new SetValueAction(INITIAL_STATE.id, INITIAL_STATE.value));
  }
}

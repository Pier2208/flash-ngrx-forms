import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Question } from '../models/Question';
import { ResetAction, SetValueAction } from 'ngrx-forms';
import { setSubmittedValue } from '../store/flashquote.actions';
import { filter, map, skip, take } from 'rxjs/operators';
import { FormValue, SetSubmittedValueAction } from '../store';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formState$: Observable<any>;
  questions: Question[];
  submittedValue$: Observable<FormValue | undefined>;

  constructor(
    private store: Store<any>,
    private actionService: ActionService
  ) {}

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select((s) => {
      console.log('aqzsedr', s.form.formState)
      return s.form.formState
    }));

    this.store.subscribe((state) => {
      this.questions = state.form.questions;
    });

    this.submittedValue$ = this.store.pipe(
      select((s) => s.form.submittedValue)
    );

    this.formState$.subscribe((state) => {
      for (let control in state.controls) {
        const question = this.questions.find((q) => q.id == parseInt(control));
        if (this.hasRules(question)) {
          this.actionService.validate(question, state.controls[control]);
        }
      }
    });
  }

  submit() {
    this.formState$
      .pipe(
        take(1),
        filter((state) => state.isValid),
        map((form) => {
          return new SetSubmittedValueAction(form.value);
        })
      )
      .subscribe(this.store);

    // dispatch action to set the form as pristine, untouched and unsubmitted
    //this.store.dispatch(new ResetAction(INITIAL_STATE.id));
    // this.store.dispatch(new SetValueAction(INITIAL_STATE.id, INITIAL_STATE.value));
  }

  // check if a question has rules
  hasRules(question: Question | undefined) {
    return question?.rules.length ? true : false;
  }
}

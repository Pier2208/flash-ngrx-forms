import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControlState, FormGroupState, } from 'ngrx-forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formState$: Observable<FormGroupState<{}>>;
  submittedValue$: Observable<any | undefined>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select((s) => s.flashquote[0].form));
    this.submittedValue$ = this.store.pipe(
      select((s) => s.flashquote[0].submittedValue)
    );
  }
}

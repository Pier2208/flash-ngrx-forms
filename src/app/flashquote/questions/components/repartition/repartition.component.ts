import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable, ReplaySubject } from 'rxjs';
import { Question } from 'src/app/flashquote/models/Question';
import { CreateGroupElementAction } from 'src/app/flashquote/store';

@Component({
  selector: 'app-repartition',
  templateUrl: './repartition.component.html',
  styleUrls: ['./repartition.component.scss'],
})
export class RepartitionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'percentage'];
  responses: any[] = [];
  groupOptions$: Observable<any>;
  @Input() question: Question;
  @Input() control: any;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.responses = state.form.questions.filter(
        (q: Question) => q.id === this.question.id
      )[0].responses;
    });

    this.groupOptions$ = this.store.pipe(
      select((s) => s.form.formState.controls[this.question.id].controls)
    );

    this.responses.forEach((response: any) => {
      this.store.dispatch(new CreateGroupElementAction(response.responseKey));
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormControlState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Question } from 'src/app/flashquote/models/Question';
import { Response } from 'src/app/flashquote/models/Response';
import { State } from 'src/app/flashquote/store';

@Component({
  selector: 'app-repartition',
  templateUrl: './repartition.component.html',
  styleUrls: ['./repartition.component.scss'],
})
export class RepartitionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'percentage'];
  responseList: (Response | undefined)[] = []; // only the responses selected by the user
  responses: Response[] = []; // all the possible responses for this repartition
  groupOptions$: Observable<any>; // an Observable that tracks down all active inputs inside the repartition (also used to sync the UI)
  @Input() question: Question;
  @Input() control: FormControlState<any>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    // load all the responses for the current repartition
    this.store.subscribe((s) => {
      this.responses = s.form.questions.find(
        (q: Question) => q.id === this.question.id
      ).responses;
    });

    // get all the current active inputs inside the repartition thanks to an Observable selector
    this.groupOptions$ = this.store.pipe(
      select((s) => s.form.formState.controls[this.question.id].controls)
    );

    // update the UI in real-time - we sync the formState with the UI (remove/add an input is handled here)
    this.groupOptions$.subscribe((data: FormControlState<any>) => {
      this.responseList = Object.keys(data).map((key) =>
        this.responses.find((res) => res.responseKey === key)
      );
    });
  }

  /** Gets the total percentage of the repartition */
  getTotalPercentage() {
    let total = 0;
    for (let i in this.control.value) total += this.control.value[i];
    return total;
  }
}

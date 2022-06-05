import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/flashquote/models/Question';

@Component({
  selector: 'app-repartition',
  templateUrl: './repartition.component.html',
  styleUrls: ['./repartition.component.scss'],
})
export class RepartitionComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'percentage'];
  responseList: any[] = [];
  responses: any[] = [];
  groupOptions$: Observable<any>;
  @Input() question: Question;
  @Input() control: any;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.groupOptions$ = this.store.pipe(
      select((s) => {
        return s.form.formState.controls[this.question.id].controls;
      })
    );

    this.store.subscribe((s) => {
      this.responses = s.form.questions.find(
        (q: any) => q.id == this.question.id
      ).responses;
    });
    console.log('responses', this.responses);
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousValue = changes.control.previousValue?.value;
    const currentValue = changes.control.currentValue?.value;

    if (currentValue & previousValue) {
      if (currentValue !== previousValue) {
        if (Object.keys(currentValue)[0] in previousValue) return;
        for (let key in currentValue) {
          for (let response of this.responses) {
            if (response.responseKey == key)
              //https://stackoverflow.com/questions/63015954/why-ngonchanges-does-not-trigger-when-input-update-the-data-angular-8
              this.responseList = [...this.responseList, response];
          }
        }
      }
    }
  }
}

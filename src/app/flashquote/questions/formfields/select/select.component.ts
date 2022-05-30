import { Component, OnInit, Input } from '@angular/core';
import { FormControlState, setValue, SetValueAction } from 'ngrx-forms';
import { Question } from 'src/app/flashquote/models/Question';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() question: Question;
  @Input() control: FormControlState<string>;
  selectedOptions: any[] = [];

  constructor(private matDialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
    console.log('control', this.control);
  }

  // open full screen dialog for select with more than 10 options
  openMultiSelectDialog() {
    // create a dialog config object
    const dialogConfig = new MatDialogConfig();
    // add the question and all the options (as Observable) related to this select
    dialogConfig.data = {
      question: this.question,
      options: this.question.responses,
      selectedOpts: this.selectedOptions,
    };
    dialogConfig.width = '100vw';
    dialogConfig.panelClass = 'mobile-dialog-container';
    // call the open method on the matDialog service and pass in the component to render
    // inside the dialog - returns a ref of the currently opened dialog
    const dialogRef = this.matDialog.open(SelectDialogComponent, dialogConfig);
    // when closing, the dialog passes the selected options back to the caller component
    dialogRef.afterClosed().subscribe((data) => {
      this.selectedOptions = data || this.selectedOptions || [];
      this.setControlValue();
    });
  }

  // set the selected options in the formControl value
  setControlValue() {
    let value: string[] = [];

    this.selectedOptions?.forEach((opt) => {
      if (opt !== undefined) value.push(opt.id);
    });

    this.store.dispatch(new SetValueAction(this.control.id, value.join()));
  }

  remove(option: string): void {
    const index = this.selectedOptions.findIndex((opt) => opt.id === option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    this.setControlValue();
  }
}

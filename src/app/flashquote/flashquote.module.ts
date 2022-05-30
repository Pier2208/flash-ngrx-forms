import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlashquoteRoutingModule } from './flashquote-routing.module';
import { FlashquoteEffects } from './store/flashquote.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FlashquoteResolver } from './flashquote.resolver';
import {reducer} from './store/index';
import { FormComponent } from './form/form.component';
import { NgrxFormsModule } from 'ngrx-forms';
import { QuestionBaseComponent } from './questions/question-base/question-base.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from './questions/formfields/input/input.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { SelectComponent } from './questions/formfields/select/select.component';
import { SelectDialogComponent } from './questions/formfields/select-dialog/select-dialog.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    QuestionBaseComponent,
    InputComponent,
    SelectComponent,
    SelectDialogComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FlashquoteRoutingModule,
    NgrxFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    EffectsModule.forFeature([FlashquoteEffects]),
    StoreModule.forFeature(
      'form',
      reducer
    ),
  ],
  providers: [FlashquoteResolver]
})
export class FlashquoteModule { }

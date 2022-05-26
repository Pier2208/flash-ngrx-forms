import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlashquoteRoutingModule } from './flashquote-routing.module';
import { FlashquoteEffects } from './flashquote.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FlashquoteResolver } from './flashquote.resolver';
import * as fromFlashquote from './reducers';
import { FormComponent } from './form/form.component';
import { NgrxFormsModule } from 'ngrx-forms';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FlashquoteRoutingModule,
    NgrxFormsModule,
    EffectsModule.forFeature([FlashquoteEffects]),
    StoreModule.forFeature(
      fromFlashquote.flashquoteFeatureKey,
      [fromFlashquote.formReducers]
    ),
  ],
  providers: [FlashquoteResolver]
})
export class FlashquoteModule { }

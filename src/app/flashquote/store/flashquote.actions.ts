import { createAction, props } from '@ngrx/store';
import { FormControlState } from 'ngrx-forms';
import { FlashFormDTO } from '../models/Flashquote';

export const loadFlashquote = createAction(
  '[Flashquote Home Resolver] Load FlashForm'
);

export const flashquoteLoaded = createAction(
  '[Load Flashform Effect] FlashForm Loaded',
  props<{ flashquote: FlashFormDTO }>()
);

export const setValue = createAction(
  '[Dialog Set Value] Set Selected Value',
  props<{ control: FormControlState<any>, selectedOptions: string }>()
);
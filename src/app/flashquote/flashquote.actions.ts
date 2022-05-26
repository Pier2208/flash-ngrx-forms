import { createAction, props } from '@ngrx/store';
import { FlashFormDTO } from './models/Flashquote';

export const loadFlashquote = createAction(
  '[Flashquote Home Resolver] Load FlashForm'
);

export const flashquoteLoaded = createAction(
  '[Load Flashform Effect] FlashForm Loaded',
  props<{ flashquote: FlashFormDTO }>()
);
import { AbstractControl } from '@angular/forms';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { addGroupControl, createFormGroupState } from 'ngrx-forms';
import { FlashquoteActions } from '../action-types';

export const flashquoteFeatureKey = 'flashquote';

export const formReducers = createReducer(
  {},
  on(FlashquoteActions.flashquoteLoaded, (state, { flashquote }) => {
    let form = createFormGroupState('contracteur_v2', {});
    for (let question of flashquote.questions) {
      form = addGroupControl<any>(question.id, '')(form);
    }
    return {
      ...state,
      form,
    };
  })
);

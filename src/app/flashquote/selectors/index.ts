import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store';
import * as fromQuestions from '../reducers/questionsReducer';

// Feature selector
export const selectForm = createFeatureSelector<State['form']>('form');

// selectors
export const selectQuestions = createSelector(
  selectForm,
  (state) => state.questions
);

export const selectFormState = createSelector(
  selectForm,
  (state) => state.formState
);

export const selectSubmittedValue = createSelector(
  selectForm,
  (state) => state.submittedValue
);

export const selectErrors = createSelector(
  selectFormState,
  (state) => state.errors
);

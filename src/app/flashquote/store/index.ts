import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import {
  addGroupControl,
  box,
  Boxed,
  createFormGroupState,
  createFormStateReducerWithUpdate,
  disable,
  enable,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';
import {
  equalTo,
  minLength,
  required,
  requiredTrue,
} from 'ngrx-forms/validation';
import { FlashquoteActions } from './action-types';

import { AppState as RootState } from '../../reducers/app.reducer';
import { FlashFormDTO } from '../models/Flashquote';

export interface FormValue {
  [id: number]: string;
}


export interface State extends RootState {
  form: {
    formState: FormGroupState<FormValue>;
    submittedValue: FormValue | undefined;
    questions: any;
  };
}

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'form/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: FormValue) { }
}

export const FORM_ID = 'contracteur_v2';
export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {});

// const validationFormGroupReducer = createFormStateReducerWithUpdate<FormValue>(updateGroup<FormValue>({
//   60: validate(required),
//   62: validate(required)
// }));


function validation(questions: any[]) {
  return questions.reduce((acc, q) => {
    if(q.isRequired) {
      acc[q.id] = 'required'
    }
    return acc
  }, {})
}


let formState = createFormGroupState('contracteur_v2', {});

const reducers = combineReducers<State['form'], any>({
  questions: createReducer(
    {},
    on(FlashquoteActions.flashquoteLoaded, (state, { flashquote }) => {
      return [
        ...flashquote.questions
      ];
    })
  ),
  formState(state = INITIAL_STATE, action: any) {
    // return validationFormGroupReducer(state, action);
    if (action.type === '[Load Flashform Effect] FlashForm Loaded') {
      for (let question of action.flashquote.questions) {
        formState = addGroupControl<any>(question.id, '')(formState);
      }
      return {
        ...state,
        ...formState,
      };
    }

    return createFormStateReducerWithUpdate<FormValue>(
      updateGroup<FormValue>({
        //60: validate(required),
        //62: validate(required),
      })
    )(state, action);
  },
  submittedValue(s: FormValue | undefined, a: SetSubmittedValueAction) {
    console.log('submitted', s)
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;

      default:
        return s;
    }
  },
});

export function reducer(state: State['form'], action: Action) {
  return reducers(state, action);
}
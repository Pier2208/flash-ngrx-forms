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
  // 60: string;
  // 62: string;
  // 1532: string;
  // 1533: string;
  // 2879: string;
  // 2885: string;
  // 2880: string;
  // 2881: string;
  // 2882: string;
  // 2883: string;
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
  static readonly TYPE = 'material/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: FormValue) {}
}

export class FlashquoteLoadedAction implements Action {
  static readonly TYPE = 'form/SET_FLASHQUOTE';
  readonly type = FlashquoteLoadedAction.TYPE;
  constructor(public flashquote: FlashFormDTO) {}
}

export const FORM_ID = 'contracteur_v2';

export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {
  // 60: '',
  // 62: '',
  // 1532: '',
  // 1533: '',
  // 2879: '',
  // 2885: '',
  // 2880: '',
  // 2881: '',
  // 2882: '',
  // 2883: ''
});

// const validationFormGroupReducer = createFormStateReducerWithUpdate<FormValue>(updateGroup<FormValue>({
//   60: validate(required),
//   62: validate(required)
// }));
let formState = createFormGroupState('contracteur_v2', {});

const reducers = combineReducers<State['form'], any>({
  questions(state: any[], action: any) {
    // return validationFormGroupReducer(state, action);
    if (action.type === '[Load Flashform Effect] FlashForm Loaded') {
      return {
        ...action.flashquote.questions,
      };
    }
  },
  formState(state = INITIAL_STATE, action: any) {
    // return validationFormGroupReducer(state, action);
    if (action.type === '[Load Flashform Effect] FlashForm Loaded') {
      for (let question of action.flashquote.questions) {
        formState = addGroupControl<any>(question.id, '')(formState);
      }
      return {
        ...formState,
      };
    }

    return createFormStateReducerWithUpdate<FormValue>(
      updateGroup<FormValue>({
        // 60: validate(required),
        // 62: validate(required),
      })
    )(state, action);
  },
  submittedValue(
    state: FormValue | undefined,
    action: SetSubmittedValueAction
  ) {
    switch (action.type) {
      case SetSubmittedValueAction.TYPE:
        return action.submittedValue;

      default:
        return state;
    }
  },
});

export function reducer(state: State['form'], action: Action) {
  return reducers(state, action);
}

// import { Action, createAction, createReducer, on, props } from '@ngrx/store';
// import { createFormGroupState, FormGroupState, onNgrxForms, addGroupControl } from 'ngrx-forms';
// import { AppState as RootState } from '../../reducers/app.reducer';
// import { FlashquoteActions } from './action-types';

// // export interface FormValue {}

// export interface State extends RootState {
//   form: {
//     formState: FormGroupState<any>;
//     submittedValue: any | undefined;
//   };
// }

// // export const setSubmittedValue = createAction(
// //   'flashquote/SET_SUBMITTED_VALUE',
// //   props<{ submittedValue: FormValue }>(),
// // );

// export const combinedReducer= createReducer(
//   {},
//   onNgrxForms(),
//   on(FlashquoteActions.flashquoteLoaded, (state, { flashquote }) => {
//     let formState = createFormGroupState('contracteur_v2', {});

//     for (let question of flashquote.questions) {
//       formState = addGroupControl<any>(question.id, '')(formState);
//     }
//     return {
//       ...state,
//       formState,
//       questions: flashquote.questions
//     };
//   })
// );

// export function reducer(state: State['form'], action: Action) {
//   return combinedReducer(state, action);
// }

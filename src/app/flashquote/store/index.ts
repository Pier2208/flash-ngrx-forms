import { Action, combineReducers } from '@ngrx/store';

import {
  addGroupControl,
  createFormGroupState,
  createFormStateReducerWithUpdate,
  FormGroupState,
  removeGroupControl,
  updateGroup,
  validate,
} from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

import { AppState as RootState } from '../../reducers/app.reducer';
import { FlashFormDTO } from '../models/Flashquote';
import { Question } from '../models/Question';

export interface FormValue {
  [id: string]: string | { [id: string]: string };
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
  constructor(public submittedValue: FormValue) {}
}

export class FlashquoteLoadedAction implements Action {
  static readonly TYPE = 'form/FLASHQUOTE_LOADED';
  readonly type = FlashquoteLoadedAction.TYPE;
  constructor(public name: string, public flashquote: FlashFormDTO) {}
}

export class CreateGroupElementAction implements Action {
  static readonly TYPE = 'form/CREATE_GROUP_ELEMENT';
  readonly type = CreateGroupElementAction.TYPE;
  constructor(public responseKey: any, public destinationId: any) {}
}

export class RemoveGroupElementAction implements Action {
  static readonly TYPE = 'form/REMOVE_GROUP_ELEMENT';
  readonly type = RemoveGroupElementAction.TYPE;
  constructor(public responseKey: any, public destinationId: any) {}
}

export class GetResponsesFromPreviousAnswerAction implements Action {
  static readonly TYPE = 'form/GET_RESPONSES_FROM_PREVIOUS_ANSWER';
  readonly type = GetResponsesFromPreviousAnswerAction.TYPE;
  constructor(public responseList: any[], public destinationId: number) {}
}

export const FORM_ID = 'contracteur_v2';
export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {});

export function formStateReducer(
  s: FormGroupState<FormValue> | undefined = INITIAL_STATE,
  a:
    | FlashquoteLoadedAction
    | CreateGroupElementAction
    | RemoveGroupElementAction
) {
  switch (a.type) {
    case FlashquoteLoadedAction.TYPE:
      a.flashquote.questions.reduce((acc: any, question: Question) => {
        if (question.isRequired) {
          acc[question.id] = validate(required);
        }
        return acc;
      }, {});

      s = createFormGroupState<FormValue>(FORM_ID, {
        60: '',
        62: '',
        1532: '',
        1533: '',
        2879: '',
        2885: {},
        2880: '',
        2881: '',
        2882: '',
        2883: '',
      });

      return s;

    case RemoveGroupElementAction.TYPE:
      const newFormState = updateGroup<FormValue>({
        [a.destinationId]: (group: any) => {
          const newGroup = removeGroupControl(group, a.responseKey);
          return newGroup;
        },
      })(s);

      const withValidation = Object.keys(newFormState.controls).reduce(
        (acc: any, key) => {
          acc[key] = validate(required);
          return acc;
        },
        {}
      );

      return createFormStateReducerWithUpdate<FormValue>(
        updateGroup<FormValue>({
          [a.destinationId]: updateGroup<any>(withValidation),
        })
      )(newFormState, a);

    case CreateGroupElementAction.TYPE:
      const value = s.controls[a.destinationId].value as {};
      if (!(a.responseKey in value)) {
        const newS = updateGroup<FormValue>({
          [a.destinationId]: (group: any) => {
            return addGroupControl(group, a.responseKey, '');
          },
        })(s);

        const withValidation = Object.keys(newS.controls).reduce(
          (acc: any, key) => {
            acc[key] = validate(required);
            return acc;
          },
          {}
        );

        return createFormStateReducerWithUpdate<FormValue>(
          updateGroup<FormValue>({
            [a.destinationId]: updateGroup<any>(withValidation),
          })
        )(newS, a);
      }

      return s

    default:
      return createFormStateReducerWithUpdate<FormValue>(
        updateGroup<FormValue>({
          60: validate(required),
          1532: validate(required),
          1533: validate(required),
          2879: validate(required),
          2885: updateGroup<any>({}),
          2880: validate(required),
          2881: validate(required),
          2882: validate(required),
          2883: validate(required),
        })
      )(s, a);
  }
}

export function questionsReducer(s: [], a: FlashquoteLoadedAction) {
  switch (a.type) {
    case FlashquoteLoadedAction.TYPE:
      return [...a.flashquote.questions];

    default:
      return s;
  }
}

const reducers = combineReducers<State['form'], any>({
  questions: questionsReducer,
  formState: formStateReducer,
  submittedValue(s: FormValue | undefined, a: SetSubmittedValueAction) {
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;

      default:
        return s;
    }
  },
});

export function reducer(s: State['form'], a: Action) {
  return reducers(s, a);
}

// export class CreateGroupElementAction implements Action {
//   static readonly TYPE = 'form/CREATE_GROUP_ELEMENT';
//   readonly type = CreateGroupElementAction.TYPE;
//   constructor(public name: string) {}
// }

// export class RemoveGroupElementAction implements Action {
//   static readonly TYPE = 'form/REMOVE_GROUP_ELEMENT';
//   readonly type = RemoveGroupElementAction.TYPE;
//   constructor(public name: string) {}
// }

// export function formStateReducer(
//   s = INITIAL_STATE,
//   a: // | CreateGroupElementAction
//   // | RemoveGroupElementAction
//   //FlashquoteLoadedAction
//   any
// ) {
//   s = formGroupReducer(s, a);

// switch (a.type) {
// case CreateGroupElementAction.TYPE:
//   return updateGroup<FormValue>({
//     group: (group) => {
//       const newGroup = addGroupControl(group, a.name, '');

//       // alternatively we can also use setValue
//       // const newValue = { ...group.value, [a.name]: false };
//       // const newGroup = setValue(group, newValue);

//       return newGroup;
//     },
//   })(s);

// case RemoveGroupElementAction.TYPE:
//   return updateGroup<FormValue>({
//     group: (group) => {
//       const newValue = { ...group.value };
//       delete newValue[a.name];
//       const newGroup = setValue(group, newValue);

//       // alternatively we can also use removeGroupControl
//       // const newGroup = removeGroupControl(group, a.name);

//       return newGroup;
//     },
//   })(s);
// }
// }

// import { Action, combineReducers, createReducer, on } from '@ngrx/store';
// import {
//   addArrayControl,
//   addGroupControl,
//   box,
//   Boxed,
//   createFormArrayState,
//   createFormGroupState,
//   createFormStateReducerWithUpdate,
//   disable,
//   enable,
//   FormArrayState,
//   FormGroupState,
//   updateGroup,
//   validate,
// } from 'ngrx-forms';
// import {
//   equalTo,
//   minLength,
//   required,
//   requiredTrue,
// } from 'ngrx-forms/validation';
// import { FlashquoteActions } from './action-types';

// import { AppState as RootState } from '../../reducers/app.reducer';
// import { FlashFormDTO } from '../models/Flashquote';

// export interface FormValue {
//   [id: number]: string;
// }

// export interface State extends RootState {
//   form: {
//     formState: FormGroupState<FormValue>;
//     submittedValue: FormValue | undefined;
//     questions: any;
//   };
// }

// export class SetSubmittedValueAction implements Action {
//   static readonly TYPE = 'form/SET_SUBMITTED_VALUE';
//   readonly type = SetSubmittedValueAction.TYPE;
//   constructor(public submittedValue: FormValue) {}
// }

// export class CreateGroupElementAction implements Action {
//   static readonly TYPE = 'form/CREATE_GROUP_ELEMENT';
//   readonly type = CreateGroupElementAction.TYPE;
//   constructor(public name: string) { }
// }

// export class RemoveGroupElementAction implements Action {
//   static readonly TYPE = 'form/REMOVE_GROUP_ELEMENT';
//   readonly type = RemoveGroupElementAction.TYPE;
//   constructor(public name: string) { }
// }

// export const FORM_ID = 'contracteur_v2';
// export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {

// });

// // const validationFormGroupReducer = createFormStateReducerWithUpdate<FormValue>(updateGroup<FormValue>({
// //   60: validate(required),
// //   62: validate(required)
// // }));

// // function validation(questions: any[]) {
// //   return questions.reduce((acc, q) => {
// //     if(q.isRequired) {
// //       acc[q.id] = 'required'
// //     }
// //     return acc
// //   }, {})
// // }

// let formState = createFormGroupState('contracteur_v2', {});

// const reducers = combineReducers<State['form'], any>({
//   questions: createReducer(
//     {},
//     on(FlashquoteActions.flashquoteLoaded, (state, { flashquote }) => {
//       return [...flashquote.questions];
//     })
//   ),
//   formState(state = INITIAL_STATE, action: any) {
//     // return validationFormGroupReducer(state, action);
//     if (action.type === '[Load Flashform Effect] FlashForm Loaded') {
//       let dynamicForm;
//       for (let question of action.flashquote.questions) {
//         if (question.type === 'REPARTITION') {
//           dynamicForm = createFormArrayState(question.id, []);
//           formState = addGroupControl<any>(question.id, dynamicForm)(formState);
//         } else {
//           formState = addGroupControl<any>(question.id, '')(formState);
//         }
//       }

//       return {
//         ...state,
//         ...formState
//       };
//     }

//     return createFormStateReducerWithUpdate<FormValue>(
//       updateGroup<FormValue>({
//         //60: validate(required),
//         //62: validate(required),
//       })
//     )(state, action);
//   },
//   submittedValue(s: FormValue | undefined, a: SetSubmittedValueAction) {
//     console.log('submitted', s);
//     switch (a.type) {
//       case SetSubmittedValueAction.TYPE:
//         return a.submittedValue;

//       default:
//         return s;
//     }
//   },
// });

// export function reducer(state: State['form'], action: Action) {
//   return reducers(state, action);
// }

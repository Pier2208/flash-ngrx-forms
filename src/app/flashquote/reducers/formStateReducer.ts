import { AddArrayControlAction, addGroupControl, AddGroupControlAction, createFormGroupState, createFormStateReducerWithUpdate, FormGroupState, removeGroupControl, updateGroup, validate } from "ngrx-forms";
import { lessThanOrEqualTo, required } from "ngrx-forms/validation";
import { Question } from "../models/Question";
import { FormValue } from "../store";
import { CreateGroupElementAction, FlashquoteLoadedAction, RemoveGroupElementAction } from "../actions/flashquote.actions";

export const FORM_ID = 'contracteur_v2';
export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {});

export function formStateReducer(
  s: FormGroupState<FormValue> | undefined = INITIAL_STATE,
  a:
    | FlashquoteLoadedAction
    | CreateGroupElementAction
    | RemoveGroupElementAction
) {
  console.log('action', a)
  switch (a.type) {

    case FlashquoteLoadedAction.TYPE:
      a.flashquote.questions.reduce((acc: any, question: Question) => {
        if (question.isRequired) {
          acc[question.id] = validate(required);
        }
        if (question.maxLength) {
          acc[question.id] = validate(lessThanOrEqualTo(99));
        }
        return acc;
      }, {});

      s = createFormGroupState<FormValue>(FORM_ID, {
        2891: '',
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
          2891: validate(required),
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
import {
  addGroupControl,
  AddGroupControlAction,
  createFormGroupState,
  formGroupReducer,
  FormGroupState,
  removeGroupControl,
  StateUpdateFns,
  updateGroup,
  validate,
} from 'ngrx-forms';
import {
  required
} from 'ngrx-forms/validation';
import { FormValue } from '../store';
import {
  CreateGroupElementAction,
  RemoveGroupElementAction,
} from '../actions/flashquote.actions';

export const FORM_ID = 'contracteur_v2';
export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {});

export const validateForm = (s: FormGroupState<any> = INITIAL_STATE) => {
  const updateFns = Object.keys(s.controls).reduce(
    (fns, key) => ({
      ...fns,
      [key]: validate(required),
    }),
    {} as StateUpdateFns<typeof s.value>
  );

  return updateGroup(s, updateFns);
};

export function formStateReducer(
  s: FormGroupState<any> = INITIAL_STATE,
  a:
    | AddGroupControlAction<any>
    | CreateGroupElementAction
    | RemoveGroupElementAction
) {
  switch (a.type) {
    case RemoveGroupElementAction.TYPE:
      const newS = updateGroup<FormValue>({
        [a.destinationId]: (group: any) => {
          return removeGroupControl(group, a.responseKey);
        },
      })(s);

      return formGroupReducer(newS, a);

    case CreateGroupElementAction.TYPE:
      const value = s.controls[a.destinationId].value as {};
      if (!(a.responseKey in value)) {
        const newS = updateGroup<FormValue>({
          [a.destinationId]: (group: any) => {
            return addGroupControl(group, a.responseKey, null);
          },
        })(s);

        return formGroupReducer(newS, a);
      }
  }
  return validateForm(formGroupReducer(s, a));
}

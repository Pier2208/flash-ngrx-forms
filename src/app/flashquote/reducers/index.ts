import { Action, combineReducers } from "@ngrx/store";
import { FormValue, State } from "../store";
import { SetSubmittedValueAction } from "../actions/flashquote.actions";
import { formStateReducer } from "./formStateReducer";
import { questionsReducer } from "./questionsReducer";

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
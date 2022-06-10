import { FlashquoteLoadedAction } from "../actions/flashquote.actions";
import { Question } from "../models/Question";
import { createEntityAdapter, EntityState } from "@ngrx/entity";

//export interface QuestionsState extends EntityState<Question> {}

//export const adapter = createEntityAdapter<Question>()
//export const initialState = adapter.getInitialState()

export function questionsReducer(s: [], a: FlashquoteLoadedAction) {
  switch (a.type) {
    case FlashquoteLoadedAction.TYPE:
      //return adapter.setAll(a.flashquote.questions, s)
      return [...a.flashquote.questions]

    default:
      return s
  }
}

//export const { selectAll } = adapter.getSelectors()

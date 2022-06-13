import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FlashquoteActions } from './actions/action-types';
import { FlashquoteService } from './services/flashquote.service';
import { FlashFormDTO } from './models/Flashquote';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { FlashquoteLoadedAction } from './actions/flashquote.actions';
import { AddGroupControlAction } from 'ngrx-forms';

// @Injectable()
// export class FlashquoteEffects {
//   loadFlashquote$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(FlashquoteActions.loadFlashquote),
//       concatMap((action) => this.flashquoteService.getFlashquote(action.marketId)),
//       // concatMap((action) => this.flashquoteService.getFlashquote()),
//       map((flashquote: any) => {
//         // return new FlashquoteLoadedAction('FLASHQUOTE_LOADED', flashquote)
//         localStorage.setItem("flash", JSON.stringify(flashquote))
//           return new AddGroupControlAction('contracteur_v2', 'hello', '')
//       })
//     )
//   );

@Injectable()
export class FlashquoteEffects {
  loadFlashquote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlashquoteActions.loadFlashquote),
      concatMap((action) => this.flashquoteService.getFlashquote(action.marketId)),
      // concatMap((action) => this.flashquoteService.getFlashquote()),
      map((flashquote: any)=> {
        return flashquote.questions.map((q: any) => {
          return new AddGroupControlAction('contracteur_v2', q.id, '')
        })
      }),
      switchMap((res: any) => [...res])
  ))


  constructor(
    private actions$: Actions,
    private flashquoteService: FlashquoteService
  ) { }
}

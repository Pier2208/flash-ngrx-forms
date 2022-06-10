import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FlashquoteActions } from './actions/action-types';
import { FlashquoteService } from './services/flashquote.service';
import { FlashFormDTO } from './models/Flashquote';
import { concatMap, map } from 'rxjs/operators';
import { FlashquoteLoadedAction } from './actions/flashquote.actions';

@Injectable()
export class FlashquoteEffects {
  loadFlashquote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlashquoteActions.loadFlashquote),
      concatMap((action) => this.flashquoteService.getFlashquote(action.marketId)),
      map((flashquote: FlashFormDTO ) => {
        console.log('ddd',flashquote)
        return new FlashquoteLoadedAction('FLASHQUOTE_LOADED', flashquote)
      })
    )
  );

  constructor(
    private actions$: Actions,
    private flashquoteService: FlashquoteService
  ) {}
}

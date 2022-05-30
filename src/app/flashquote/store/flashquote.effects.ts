import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FlashquoteActions } from './action-types';
import { FlashquoteService } from '../services/flashquote.service';
import { flashquoteLoaded } from './flashquote.actions';
import { FlashFormDTO } from '../models/Flashquote';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class FlashquoteEffects {
  loadFlashquote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlashquoteActions.loadFlashquote),
      concatMap((action) => this.flashquoteService.getFlashquote()),
      map((flashquote: FlashFormDTO ) => {
        return flashquoteLoaded({ flashquote})
      })
    )
  );

  constructor(
    private actions$: Actions,
    private flashquoteService: FlashquoteService
  ) {}
}

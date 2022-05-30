import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first, finalize } from 'rxjs/operators';
import { AppState } from '../reducers/app.reducer';
import { loadFlashquote } from './store/flashquote.actions';

@Injectable()
export class FlashquoteResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadFlashquote());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
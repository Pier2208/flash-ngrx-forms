import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteSlideAnimation } from './flashquote/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteSlideAnimation]
})
export class AppComponent {
  title = 'flash-ngrx-forms';

  prepareRoute(outlet: RouterOutlet) {
    return (outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
  }
}

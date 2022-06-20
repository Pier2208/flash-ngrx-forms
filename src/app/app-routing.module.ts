import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponent } from './flashquote/prime/prime.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'direct/:marketId',
    loadChildren: () =>
      import('./flashquote/flashquote.module').then((m) => m.FlashquoteModule),
      data: { animation: 'flashquote'}
  },
  {
    path: 'prime',
    component: PrimeComponent,
    data: { animation: 'prime'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
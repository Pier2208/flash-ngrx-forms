import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashquoteResolver } from './flashquote.resolver';
import { HomeComponent } from './home/home.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { flashquote: FlashquoteResolver },
    children: [
      {
        path: 'prime',
        component: PrimeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FlashquoteResolver]
})
export class FlashquoteRoutingModule {}
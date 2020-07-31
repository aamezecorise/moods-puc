import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatefilterPage } from './createfilter.page';

const routes: Routes = [
  {
    path: '',
    component: CreatefilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatefilterPageRoutingModule {}

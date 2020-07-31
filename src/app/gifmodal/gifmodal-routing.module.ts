import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifmodalPage } from './gifmodal.page';

const routes: Routes = [
  {
    path: '',
    component: GifmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifmodalPageRoutingModule {}

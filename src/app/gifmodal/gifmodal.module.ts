import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifmodalPageRoutingModule } from './gifmodal-routing.module';

import { GifmodalPage } from './gifmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifmodalPageRoutingModule
  ],
  declarations: [GifmodalPage]
})
export class GifmodalPageModule {}

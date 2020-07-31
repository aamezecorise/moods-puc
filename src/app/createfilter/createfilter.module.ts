import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CreatefilterPageRoutingModule } from "./createfilter-routing.module";
import { CreatefilterPage } from "./createfilter.page";
import { DragDirective } from "src/app/directives/drag.directive";
import { ComponentsModule } from "../../components/components.module";
import { SignaturePadModule } from "angular2-signaturepad";
import { GifmodalPageModule } from "../gifmodal/gifmodal.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SignaturePadModule,
    CreatefilterPageRoutingModule,
    GifmodalPageModule,
  ],
  declarations: [DragDirective, CreatefilterPage],
  exports: [DragDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreatefilterPageModule {}

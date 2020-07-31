import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MoodscameraPageRoutingModule } from "./moodscamera-routing.module";
import { MoodscameraPage } from "./moodscamera.page";
import { DragDirective } from "src/app/directives/drag.directive";
import { ComponentsModule } from "../../components/components.module";
import { SignaturePadModule } from "angular2-signaturepad";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SignaturePadModule,
    MoodscameraPageRoutingModule,
  ],
  declarations: [DragDirective, MoodscameraPage],
  exports: [DragDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoodscameraPageModule {}

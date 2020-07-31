import { NgModule } from "@angular/core";
import { ColorPickerComponent } from "./color-picker/color-picker";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [IonicModule, CommonModule],
  exports: [ColorPickerComponent],
})
export class ComponentsModule {}

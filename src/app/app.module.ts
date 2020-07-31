import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FiltersPage } from "./filters/filters.page";

import { ComponentsModule } from "../components/components.module";
import { SignaturePadModule } from "angular2-signaturepad";
import { CameraPreview } from "@ionic-native/camera-preview/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";

@NgModule({
  declarations: [AppComponent, FiltersPage],
  entryComponents: [FiltersPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    SignaturePadModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    Camera,
    Base64ToGallery,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from "@angular/core";
import { FiltersPage } from "../filters/filters.page";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  constructor(private modalCtrl: ModalController) {}

  openFilters() {
    this.modalCtrl
      .create({
        component: FiltersPage,
      })
      .then((modal) => {
        modal.present();
      });
  }
}

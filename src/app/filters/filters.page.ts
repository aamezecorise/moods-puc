import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.page.html",
  styleUrls: ["./filters.page.scss"],
})
export class FiltersPage implements OnInit {
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }

  onBack() {
    this.modalCtrl.dismiss({});
  }

  createFilter() {
    console.log("create filter");
    this.modalCtrl.dismiss({});
    this.navCtrl.navigateForward(["createfilter"]);
  }
}

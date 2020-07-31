import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-gifmodal",
  templateUrl: "./gifmodal.page.html",
  styleUrls: ["./gifmodal.page.scss"],
})
export class GifmodalPage implements OnInit {
  gifs = [];

  constructor(public modalController: ModalController) {
    this.gifs = [
      {
        name: "gif1",
        url: "https://media1.giphy.com/media/3ov9k0Ziq50EoOuWRi/200w.webp",
      },
      {
        name: "gif2",
        url: "https://media3.giphy.com/media/l1J9JGscNzRKvEHaU/200w.webp",
      },
      {
        name: "gif3",
        url: "https://media1.giphy.com/media/3ohhwpEkAfzIL6gkSs/200w.webp",
      },
      {
        name: "gif4",
        url: "https://media1.giphy.com/media/9AI3DSvuIRJjLlSH7g/200w.webp",
      },
      {
        name: "gif5",
        url: "https://media0.giphy.com/media/3HI5AmgYVeBUPCXrEo/200.webp",
      },
      {
        name: "gif6",
        url: "https://media1.giphy.com/media/xUPGcfqTNIzRYg3Jh6/200w.webp",
      },
      {
        name: "gif7",
        url: "https://media1.giphy.com/media/l1J9GhKwVrLt5GOiY/200w.webp",
      },
      {
        name: "gif8",
        url: "https://media2.giphy.com/media/l1J9JTiof7qPV3hQc/200w.webp",
      },
      {
        name: "gif9",
        url: "https://media2.giphy.com/media/xT9IgiHBDxr1fdej1S/200w.webp",
      },
      {
        name: "gif10",
        url: "https://media0.giphy.com/media/3ohhwBb0ifl2odkR8c/200w.webp",
      },
      {
        name: "gif11",
        url: "https://media2.giphy.com/media/l1J9tI6SO5pWYF6ow/200w.webp",
      },
      {
        name: "gif12",
        url: "https://media0.giphy.com/media/3o7aD46pS9VmMYfVwk/200w.webp",
      },
      {
        name: "gif13",
        url: "https://media0.giphy.com/media/3kQqYPyzGSQ6I/200w.webp",
      },
      {
        name: "gif14",
        url: "https://media0.giphy.com/media/XDx6YKyG6gMJW/200w.webp",
      },
      {
        name: "gif15",
        url: "https://media0.giphy.com/media/mQD6uaJzQ27V6/200w.webp",
      },
      {
        name: "gif16",
        url: "https://media0.giphy.com/media/PHhaNieEvkHao/200w.webp",
      },
      {
        name: "gif17",
        url: "https://media1.giphy.com/media/MbJoLAurzUyg8/200w.webp",
      },
    ];
  }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async selectGif(gif: any) {
    var data = gif;
    console.log(data);
    await this.modalController.dismiss({
      gifdata: data,
    });
  }
}

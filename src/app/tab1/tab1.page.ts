import { Component } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
// import { StoryViewerPage } from "../story-viewer/story-viewer.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  sliderOpts = {
    speed: 500,
    duration: 15000,
    slidesPerView: 4,
    spaceBetween: 0,
  };
  stories = new Array<any>();
  modal: any;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    let storyItem1 = {
      userPicture: "../../assets/imgs/1.jpeg",
      userId: 1,
      userName: "Aamez",
      currentItem: 0,
      items: [
        {
          date: "3 min ago",
          duration: "5",
          id: "3",
          media: "../../assets/videos/1.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 15,
        },
      ],
      seen: false,
    };

    let storyItem2 = {
      userPicture: "../../assets/imgs/2.jpg",
      userId: 2,
      userName: "Sanket",
      currentItem: 0,
      seen: false,
      items: [
        {
          date: "1 sec ago",
          duration: "8",
          id: "64",
          media: "../../assets/videos/2.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 4,
        },
        {
          date: "5 min ago",
          duration: "3",
          id: "74",
          media: "../../assets/imgs/1.jpeg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 6,
        },
        {
          date: "1 hr ago",
          duration: "3",
          id: "84",
          media: "../../assets/imgs/2.jpg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 15,
        },
      ],
    };

    let storyItem3 = {
      userPicture: "../../assets/imgs/3.jpg",
      userId: 1,
      userName: "Prasad",
      currentItem: 0,
      items: [
        {
          date: "10 min ago",
          duration: "8",
          id: "3",
          media: "../../assets/videos/3.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 5,
        },
      ],
      seen: false,
    };

    let storyItem4 = {
      userPicture: "../../assets/imgs/desktop.jpg",
      userId: 2,
      userName: "Mahesh",
      currentItem: 0,
      seen: false,
      items: [
        {
          date: "30 min ago",
          duration: "3",
          id: "74",
          media: "../../assets/imgs/7.jpg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 10,
        },
        {
          date: "30 min ago",
          duration: "8",
          id: "64",
          media: "../../assets/videos/1.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 8,
        },
        {
          date: "1 hr ago",
          duration: "3",
          id: "84",
          media: "../../assets/imgs/4.jpg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 25,
        },
      ],
    };

    let storyItem5 = {
      userPicture: "../../assets/imgs/4.jpg",
      userId: 1,
      userName: "Preet",
      currentItem: 0,
      items: [
        {
          date: "20 min ago",
          duration: "6",
          id: "3",
          media: "../../assets/videos/3.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 5,
        },
      ],
      seen: false,
    };

    let storyItem6 = {
      userPicture: "../../assets/imgs/5.jpg",
      userId: 2,
      userName: "Ertugul",
      currentItem: 0,
      seen: false,
      items: [
        {
          date: "30 min ago",
          duration: "6",
          id: "64",
          media: "../../assets/videos/2.mp4",
          mediaType: "video",
          seen: false,
          type: "0",
          views: 14,
        },
        {
          date: "30 min ago",
          duration: "3",
          id: "74",
          media: "../../assets/imgs/4.jpg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 25,
        },
        {
          date: "1 hr ago",
          duration: "3",
          id: "84",
          media: "../../assets/imgs/7.jpg",
          mediaType: "image",
          seen: false,
          type: "0",
          views: 44,
        },
      ],
    };

    this.stories.push(storyItem1);
    this.stories.push(storyItem2);
    this.stories.push(storyItem3);
    this.stories.push(storyItem4);
    this.stories.push(storyItem5);
    this.stories.push(storyItem6);

    this.reorderStories();
  }

  async openStoryViewer(index: number) {
    // console.log(index);
    // console.log(this.stories);
    // this.modal = await this.modalCtrl.create({
    //   component: StoryViewerPage,
    //   cssClass: "dialog-modal",
    //   componentProps: {
    //     stories: this.stories,
    //     tapped: index,
    //   },
    // });
    // return await this.modal.present();
    // let modal = this.modalCtrl.create(StoryViewerPage, {
    //   stories: this.stories,
    //   tapped: index,
    // });
    // modal.onDidDismiss(() => {
    //   this.reorderStories();
    // });
    // modal.present();
  }

  async onDismiss() {
    this.modal.onDidDismiss(() => {
      this.reorderStories();
    });
  }

  reorderStories() {
    this.stories.sort((a, b) => {
      if (a.seen) return 1;
      if (b.seen) return -1;

      return 0;
    });
  }

  openCamera() {
    this.navCtrl.navigateForward(["/moodscamera"]);
  }
}

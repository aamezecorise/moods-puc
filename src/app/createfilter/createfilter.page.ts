import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Platform, NavController, ToastController } from "@ionic/angular";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import {
  Base64ToGallery,
  Base64ToGalleryOptions,
} from "@ionic-native/base64-to-gallery/ngx";
import { ModalController } from "@ionic/angular";
import { GifmodalPage } from "../gifmodal/gifmodal.page";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import * as $ from "jquery";

@Component({
  selector: "app-createfilter",
  templateUrl: "./createfilter.page.html",
  styleUrls: ["./createfilter.page.scss"],
})
export class CreatefilterPage implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("myText") focusInput: { setFocus: () => void };
  signaturePadOptions: any;
  penWidth: number = 2;
  color: string = "#000000";
  isDrawing: boolean = false;
  drawsData: any = [""];
  showPicker: boolean = false;
  showPenSize: boolean = false;
  allowDraw: boolean = false;
  showdrawpad: boolean = false;
  openTextpad: boolean = false;
  opengifpad: boolean = false;
  gifData: any = [];
  cameraphoto: any;

  @ViewChild("imageCanvas", { static: false }) canvas: any;
  @ViewChild("myText", { static: false }) canvas2: any;
  canvasElement: any;
  canvasElement2: any;
  saveX: number;
  saveY: number;

  selectedColor = "#9e2956";
  colors = [
    "#9e2956",
    "#c2281d",
    "#de722f",
    "#edbf4c",
    "#5db37e",
    "#459cde",
    "#4250ad",
    "#802fa3",
    "#8484cb",
    "#4e2e4f",
    "#d5cd7e",
    "#7fa17f",
    "#45f7d0",
  ];

  drawing = false;
  lineWidth = 5;

  colorPicker = {
    initialSlide: 0,
    loop: false,
    speed: 400,
    slidesPerView: 5,
    spaceBetween: 30,
  };

  slideOpts = {
    initialSlide: 1,
    loop: true,
    speed: 400,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ["webkitTransitionEnd", "transitionend"];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    },
  };

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    public modalController: ModalController,
    private camera: Camera
  ) {
    this.signaturePadOptions = {
      minWidth: this.penWidth,
      canvasWidth: this.platform.width(),
      canvasHeight: this.platform.height(),
      penColor: this.color,
    };
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement2 = this.canvas2.nativeElement;
    this.canvasElement.width = this.platform.width() + "";
    this.canvasElement.height = 500;
    // Set the Canvas Element and its size
  }

  //Text functions
  openText() {
    console.log("text pad click");
    // $("#myText").focus();
    this.focusInput.setFocus();
    // document.getElementById("myText").focus();
    // this.openTextpad = !this.openTextpad;
    // if (this.openTextpad) {
    //   document.getElementById("myText").focus();
    // } else {
    //   !this.openTextpad;
    // }
  }

  //gifs fuctions
  gifspad() {
    this.opengifpad = !this.opengifpad;
  }

  toggleAllowDraw() {
    this.allowDraw = !this.allowDraw;

    if (this.allowDraw) {
      this.showdrawpad = true;
    } else {
      this.showdrawpad = false;
    }
  }

  startDrawing(ev) {
    if (this.showdrawpad) {
      this.drawing = true;
    } else {
      this.drawing = false;
    }
    var canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }

  endDrawing() {
    this.drawing = false;
    this.drawsData.push(this.canvasElement.toDataURL());
    console.log(this.drawsData);
  }

  undo() {
    let ctx = this.canvasElement.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.drawsData = [""];

    // if (this.drawsData.length > 2) {
    //   this.drawsData.pop();
    //   let prevData = this.drawsData[this.drawsData.length - 1];
    //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //   // this.canvasElement.clear();
    //   // this.canvasElement.fromDataURL(prevData);
    // } else {
    //   this.drawsData = [""];
    //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // }
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  setBackground() {
    // var img = new Image()
    // var img.src = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
    var background = new Image();
    // console.log(background);
    background.src = "../../assets/imgs/1.jpeg";
    let ctx = this.canvasElement.getContext("2d");
    console.log(ctx);
    background.onload = () => {
      ctx.drawImage(
        background,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
    };
  }

  moved(ev) {
    if (!this.drawing) return;

    var canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext("2d");

    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    ctx.lineJoin = "round";
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = this.lineWidth;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();

    ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  exportCanvasImage() {
    console.log(this.canvasElement);
    var dataUrl = this.canvasElement.toDataURL();
    var dataUrl2 = this.canvasElement2.toDataURL();
    console.log(dataUrl2);

    // Clear the current canvas
    let ctx = this.canvasElement.getContext("2d");
    let ctx2 = this.canvasElement2.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx2.clearRect(0, 0, ctx.canvas2.width, ctx.canvas2.height);

    if (this.platform.is("cordova")) {
      const options: Base64ToGalleryOptions = {
        prefix: "canvas_",
        mediaScanner: true,
      };

      this.base64ToGallery.base64ToGallery(dataUrl, options).then(
        async (res) => {
          const toast = await this.toastCtrl.create({
            message: "Image saved to camera roll.",
            duration: 2000,
          });
          toast.present();
        },
        (err) => console.log("Error saving image to gallery ", err)
      );
    } else {
      // Fallback for Desktop
      var data = dataUrl.split(",")[1];
      let blob = this.b64toBlob(data, "image/png");

      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "canvasimage.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  // https://forum.ionicframework.com/t/save-base64-encoded-image-to-specific-filepath/96180/3
  b64toBlob(b64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  ngOnInit() {}

  onback() {
    console.log("onback click");
    this.navCtrl.navigateBack(["/tabs/tab1"]);
  }

  // penWidthChange(e) {
  //   this.penWidth = e.value;
  //   this.setPenWidth(e.value);
  // }

  // setPenWidth(size) {
  //   this.signaturePad.set("minWidth", size);
  // }

  // clearPad() {
  //   this.signaturePad.clear();
  // }

  // resetPad() {
  //   this.clearPad();
  //   this.setPadColor("#FFFFFF");
  // }

  // setPadColor(selectedColor) {
  //   this.color = selectedColor;
  //   this.signaturePad.set("penColor", selectedColor);
  // }

  // toggleAllowDraw() {
  //   this.allowDraw = !this.allowDraw;

  //   if (this.allowDraw) {
  //     this.signaturePad.on();
  //   } else {
  //     this.signaturePad.off();
  //   }
  // }

  // undo() {
  //   if (this.drawsData.length > 2) {
  //     this.drawsData.pop();
  //     let prevData = this.drawsData[this.drawsData.length - 1];
  //     this.signaturePad.clear();
  //     this.signaturePad.fromDataURL(prevData);
  //   } else {
  //     this.drawsData = [""];
  //     this.signaturePad.clear();
  //   }
  // }

  // drawComplete() {
  //   this.isDrawing = false;
  //   this.drawsData.push(this.signaturePad.toDataURL("image/png", 1.0));
  //   console.log(this.drawsData);
  // }

  // drawStart() {
  //   this.showPicker = false;
  //   this.showPenSize = false;
  //   this.isDrawing = true;
  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GifmodalPage,
      cssClass: "my-custom-class",
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.gifData = [...this.gifData, dataReturned.data.gifdata];
        console.log(this.gifData);
      }
    });

    return await modal.present();
  }

  // capturePhoto() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     targetWidth: 1525,
  //     targetHeight: 720,
  //     // destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     // mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };

  //   this.camera.getPicture(options).then((filepath) => {
  //     this.cameraphoto = filepath
  //     this.base64.encodeFile(filepath).then((base64File: string) => {
  //       this.cameraphoto = base64File;
  //       // this.slidesArray.unshift({ file: base64File, type: 'image' })
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   }, (err) => {
  //     console.log(err)
  //   })
  //   );
  // }

  delete() {}
}

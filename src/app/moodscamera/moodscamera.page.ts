import { Component, OnInit, ViewChildren, ViewChild } from "@angular/core";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions,
} from "@ionic-native/camera-preview/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { Platform, NavController } from "@ionic/angular";

@Component({
  selector: "app-moodscamera",
  templateUrl: "./moodscamera.page.html",
  styleUrls: ["./moodscamera.page.scss"],
  providers: [CameraPreview, Camera],
})
export class MoodscameraPage implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: any;
  penWidth: number = 2;
  color: string = "#000000";
  isDrawing: boolean = false;
  drawsData: any = [""];
  showPicker: boolean = false;
  showPenSize: boolean = false;
  allowDraw: boolean = true;

  @ViewChildren("emj")
  emj: any;
  selectedFilter = null;
  image = "";
  level = 1;
  result: HTMLElement;

  // picture options
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 100,
  };

  canvas: any;
  context: any;

  emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "😛",
    "😜",
    "😝",
    "🤤",
    "😒",
    "😓",
    "😔",
    "😕",
    "🙃",
    "🤑",
    "😲",
    "🙁",
    "😖",
    "😞",
    "😟",
    "😤",
    "😢",
    "😭",
    "😦",
    "😧",
    "😨",
    "😩",
    "🤯",
    "😬",
    "😰",
    "😱",
    "😳",
    "🤪",
    "😵",
    "😡",
    "😠",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "😇",
    "🤠",
    "🤡",
    "🤥",
    "🤫",
    "🤭",
    "🧐",
    "🤓",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];
  smileys = [];

  snapped: boolean = false;
  filtering: boolean = false;
  pickingEmojis: boolean = false;

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: "rear",
    tapPhoto: false,
    previewDrag: false,
    toBack: true,
    alpha: 1,
  };

  constructor(
    private platform: Platform,
    private cameraPreview: CameraPreview,
    private camera: Camera,
    public navCtrl: NavController
  ) {
    this.signaturePadOptions = {
      minWidth: this.penWidth,
      canvasWidth: this.platform.width(),
      canvasHeight: this.platform.height(),
      penColor: this.color,
    };
  }

  ngOnInit() {
    (this.canvas = <HTMLCanvasElement>document.getElementById("viewport")),
      (this.context = this.canvas.getContext("2d"));

    this.context.canvas.width = screen.availWidth;
    this.context.canvas.height = screen.availHeight;

    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log(res);
        this.cameraPreview.show();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // imageLoaded(e) {
  //   // Grab a reference to the canvas/image
  //   this.result = e.detail.result;
  // }

  // captureImage() {
  //   // Use with a local asset for testing
  //   // this.image = 'assets/imgs/mallorca.jpg';
  //   // this.filter(null, 1);

  //   // Real usage with Camera
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     correctOrientation: true
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     this.image = 'data:image/jpeg;base64,' + imageData;
  //     this.filter(null, 1);
  //   });
  // }

  // filter(selected, level?) {
  //   this.selectedFilter = selected;
  //   this.level = level ? level : 1;
  // }

  // saveImage() {
  //   if (!this.selectedFilter) {
  //     // Use the original image!
  //   } else {
  //     let canvas = this.result as HTMLCanvasElement;
  //     // export as dataUrl or Blob!
  //     let base64 = canvas.toDataURL('image/jpeg', 1.0);
  //     // Do whatever you want with the result!
  //   }
  // }
  // ngAfterViewInit() {
  //   this.resetPad();
  //   this.allowDraw = false;
  //   this.signaturePad.off();
  // }

  penWidthChange(e) {
    this.penWidth = e.value;
    this.setPenWidth(e.value);
  }

  setPenWidth(size) {
    this.signaturePad.set("minWidth", size);
  }

  clearPad() {
    this.signaturePad.clear();
  }

  resetPad() {
    this.clearPad();
    this.setPadColor("#FFFFFF");
  }

  setPadColor(selectedColor) {
    this.color = selectedColor;
    this.signaturePad.set("penColor", selectedColor);
  }

  toggleAllowDraw() {
    this.allowDraw = !this.allowDraw;

    if (this.allowDraw) {
      this.signaturePad.on();
    } else {
      this.signaturePad.off();
    }
  }

  undo() {
    if (this.drawsData.length > 2) {
      this.drawsData.pop();
      let prevData = this.drawsData[this.drawsData.length - 1];
      this.signaturePad.clear();
      this.signaturePad.fromDataURL(prevData);
    } else {
      this.drawsData = [""];
      this.signaturePad.clear();
    }
  }

  drawComplete() {
    this.isDrawing = false;
    this.drawsData.push(this.signaturePad.toDataURL("image/png", 1.0));
  }

  drawStart() {
    this.showPicker = false;
    this.showPenSize = false;
    this.isDrawing = true;
  }

  setCanvas() {
    let base_image = new Image();

    base_image.src = this.image;
    base_image.onload = () => {
      this.context.drawImage(
        base_image,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      //this.addEmoji();
    };
  }
  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  hideEmojiPicker() {
    this.pickingEmojis = false;
  }
  showEmojiPicker() {
    this.pickingEmojis = true;
  }
  addEmoji(emoji) {
    this.smileys.push(emoji);
  }
  writeEmoji(smiley, x, y) {
    this.context.font = "50px HelveticaNeue";
    this.context.fillText(smiley, x, y);
  }

  showFilters() {
    this.filtering = true;
  }

  unsnap() {
    this.image = null;
    this.smileys = [];
    this.clearCanvas();
    this.snapped = false;
  }

  snap() {
    // take a snap shot
    this.cameraPreview.takeSnapshot(this.pictureOpts).then(
      (imageData) => {
        this.image = "data:image/jpeg;base64," + imageData;
        this.snapped = true;
        this.setCanvas();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // takePicture(){
  //   // take a picture
  //   this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
  //     this.image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  switch() {
    this.cameraPreview.switchCamera();
  }

  setEffect(color: string) {
    color = color ? color : "NONE";

    this.filtering = false;

    this.cameraPreview.setColorEffect(this.cameraPreview.COLOR_EFFECT[color]);
  }

  stop() {
    this.cameraPreview.stopCamera();
  }

  setflash() {
    this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.ON);
  }

  flash() {
    this.cameraPreview.getFlashMode().then((currentFlashMode) => {
      console.log(currentFlashMode);
      if (currentFlashMode == "off") {
        this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.ON);
      } else {
        this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.OFF);
      }
    });
  }

  onback() {
    console.log("onback click");
    this.navCtrl.navigateBack(["/tabs/tab1"]);
  }
}

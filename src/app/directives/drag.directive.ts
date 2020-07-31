import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Directive({
  selector: "[drag]",
  host: {
    "(touchmove)": "handlePan($event)",
    "(pointermove)": "handlePinch($event)",
  },
})
export class DragDirective {
  @Input("size") size: any = 50;
  @Input("top") top: any = screen.availHeight / 2;
  @Input("left") left: any = screen.width / 2;

  alert: any;

  constructor(
    public alertCtrl: AlertController,
    public element: ElementRef,
    public renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement, "z-index", "1001");
    this.renderer.setStyle(this.element.nativeElement, "position", "absolute");
    this.renderer.setStyle(this.element.nativeElement, "display", "block");
    this.renderer.setStyle(
      this.element.nativeElement,
      "font-size",
      this.size + "px"
    );
    this.renderer.setStyle(this.element.nativeElement, "top", this.top + "px");
    this.renderer.setStyle(
      this.element.nativeElement,
      "left",
      this.left + "px"
    );
  }

  handlePan(ev) {
    let target = ev.changedTouches[0];
    this.renderer.setStyle(
      this.element.nativeElement,
      "top",
      target.clientY + "px"
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      "left",
      target.clientX + "px"
    );
  }

  handlePinch(ev) {
    let point = ev;
    if (point.pointId != ev.pointId) {
      this.showAlert("hi");
    } else {
      console.log(ev);
    }
  }

  async showAlert(message) {
    this.alert = await this.alertCtrl.create({
      message: message,
    });
    return await this.alert.present();
  }
}

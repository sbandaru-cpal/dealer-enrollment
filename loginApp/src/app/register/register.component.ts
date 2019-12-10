import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DesktopCameraService } from '../desktop-camera.service';
import { FaceApiService } from '../face-api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
imageString = '';
  

    @ViewChild("video", {static:true})
    public video: ElementRef;

    @ViewChild("canvas", {static:true})
    public canvas: ElementRef;

    public constructor(private faceApi: FaceApiService) {
    }



  ngOnInit() {
  }

  public startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public stopCamera() {
    this.video.nativeElement.srcObject.getTracks().forEach(track => track.stop())
  }

  public capture() {
    this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.imageString = this.canvas.nativeElement.toDataURL("image/png");
  }

  public register() {
    this.faceApi.scanImage(this.imageString)
    .subscribe(data => {
      alert(JSON.parse(JSON.stringify(data))[0].faceId);
    });
  }
}

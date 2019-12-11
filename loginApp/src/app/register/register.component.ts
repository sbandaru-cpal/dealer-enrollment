import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DesktopCameraService } from '../desktop-camera.service';
import { FaceApiService } from '../face-api.service';
import { RouteoneService } from '../routeone.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    imageString = '';
    userId = 'Sbandaru';
    password='';
    firstName='';
    lastName='';  
    registrationFailed = false;

    @ViewChild("video", {static:true})
    public video: ElementRef;

    @ViewChild("canvas", {static:true})
    public canvas: ElementRef;

    public constructor(private faceApi: FaceApiService,
    private routoneApi: RouteoneService,
    private router: Router) {
     
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
    alert(this.imageString);
  }

  public register() {
    this.faceApi.scanImage(this.imageString)
    .subscribe(data => {
     // alert(JSON.parse(JSON.stringify(data))[0].faceId);
     const scannedFaceId = JSON.parse(JSON.stringify(data))[0].faceId;
     alert(scannedFaceId);
     this.routoneApi.createUser(this.userId, this.password, this.firstName, this.lastName, scannedFaceId).subscribe(
       registeredUser => {
         const navigationExtras: NavigationExtras = {
                    state: {
                      data: data,
                      userId: this.userId,
                      firstName: this.firstName,
                      lastName: this.lastName
                    }
                  };
            this.router.navigate(['/profile'], navigationExtras);
       },
       error => {
         this.registrationFailed = true;
       }
     );
    });
  }

  public setUserId(value:string) {
    this.userId = value;
  }

  public setPassword(value:string) {
    this.password = value;
  }

  public setFirstName(value:string) {
    this.firstName = value;
  }

  public setLastName(value:string) {
    this.lastName = value;
  }


}

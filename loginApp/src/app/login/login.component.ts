import { Component, OnInit } from '@angular/core';
import {DesktopCameraService} from '../desktop-camera.service';
import {FaceApiService} from '../face-api.service';
import {RouteoneService} from '../routeone.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError=false;
  userDataError = false;
  faceApiError = false;
  userId='';
  constructor(private cameraService: DesktopCameraService,
    private faceApi: FaceApiService,
    private router: Router,
    private routeOneApi: RouteoneService) { }

  ngOnInit() {
  }


  public loginWithFaceId() {
    this.cameraService.getPhoto().subscribe(
      data => {
        this.faceApi.scanImage(data).subscribe(
          response => {
          const jsonData = JSON.parse(JSON.stringify(response));
          this.routeOneApi.getUser(this.userId).subscribe(
              userData => {
                const userDetails = JSON.parse(JSON.stringify(userData));
                this.verifyUser(jsonData[0].faceId, userDetails, data);
              },
              error => {
                this.userDataError = true;
              }
          );
         
          }
        )
      }
    );
  }

  public setUserId(userId:string){
    this.userId = userId;
  }

  public verifyUser(scannedFaceId:string, userDetails:any, data:string) {
     this.faceApi.verify(scannedFaceId, userDetails.faceId).subscribe(
            verifyResponse => {
              const isLoginSuccessful = JSON.parse(JSON.stringify(verifyResponse)).isIdentical;
                if(isLoginSuccessful){
                  const navigationExtras: NavigationExtras = {
                    state: {
                      data: data,
                      userId: userDetails.userId,
                      firstName: userDetails.firstName,
                      lastName: userDetails.lastName
                    }
                  };
                  this.router.navigate(['/profile'], navigationExtras);
                }else{
                this.loginError = true;
                }
            },
            error => {
              this.faceApiError = true;
            }
          );
  }

}

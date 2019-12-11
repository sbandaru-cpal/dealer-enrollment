import { Component, OnInit } from '@angular/core';
import {DesktopCameraService} from '../desktop-camera.service';
import {FaceApiService} from '../face-api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError=false;
  constructor(private cameraService: DesktopCameraService,
    private faceApi: FaceApiService,
    private router: Router) { }

  ngOnInit() {
  }

  public loginWithFaceId() {
    this.cameraService.getPhoto().subscribe(
      data => {
        this.faceApi.scanImage(data).subscribe(
          response => {
          const jsonData = JSON.parse(JSON.stringify(response));
          alert(jsonData[0].faceId);
          this.faceApi.verify(jsonData[0].faceId, '320fb4d6-3e3e-495b-899f-72a10460acf0').subscribe(
            verifyResponse => {
              const isLoginSuccessful = JSON.parse(JSON.stringify(verifyResponse)).isIdentical;
                if(isLoginSuccessful){
                  const navigationExtras: NavigationExtras = {
                    state: {
                      data: data
                    }
                  };
                  this.router.navigate(['/profile'], navigationExtras);
                }else{
                this.loginError = true;
                }
            }
          );
          }
        )
      }
    );
  }

}

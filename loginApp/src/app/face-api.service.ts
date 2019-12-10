import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FaceApiService {
  API_KEY = '3ce3bbda0de84139bf018eb9a96312d0';
  constructor(private httpClient: HttpClient) { }

  getSmartphone() {
    return this.httpClient.get('test');
  }

  scanImage(base64Image: string) {
    const headers = this.getHeaders(this.API_KEY, 'application/octet-stream');
    const params = this.getParams();
    const blob = this.makeblob(base64Image);

    return this.httpClient.post(
      environment.detectURL,
      blob,
      {
        params,
        headers
      }
    );
  }

  verify(faceId1: string, faceId2: string) {
    const headers = this.getHeaders(this.API_KEY, 'application/json');
    const params = new HttpParams();

    return this.httpClient.post(
      environment.verifyURL,
      {
        faceId1:faceId1,
        faceId2:faceId2
      },
      {
        params,
        headers
      }
    );
  }

  private makeblob(dataURL) {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  private getHeaders(subscriptionKey: string, contentType: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', contentType);
    headers = headers.set('Ocp-Apim-Subscription-Key', subscriptionKey);

    return headers;
  }

  private getParams() {
    const httpParams = new HttpParams()
      .set('returnFaceId', 'true')
      .set('returnFaceLandmarks', 'false')
      .set(
        'returnFaceAttributes',
        'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
      );

    return httpParams;
  }
}

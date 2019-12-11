import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RouteoneService {

  constructor(private httpClient: HttpClient) { }

  getUser(userId: string) {
    return this.httpClient.get('http://localhost:8080/user/by-userId/'+userId);
  }

  createUser(userId: string, password: string, firstName:string, lastName:string, faceId:string) {
    const headers = this.getHeaders('application/json');
    const params = new HttpParams();
    return this.httpClient.post(
      'http://localhost:8080/user',
      {
        userId:userId,
        password:password,
        firstName:firstName,
        lastName:lastName,
        faceId:faceId
      }
    );
  }

  private getHeaders(contentType: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', contentType);
    return headers;
  }

}

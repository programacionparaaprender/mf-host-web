import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oauthUrl = 'http://localhost:8090/api/security/oauth/token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization: Basic base64(frontendapp:12345)'
      'Authorization': 'Basic ' + btoa('frontendapp:12345')
    });

    return this.http.post(this.oauthUrl, body.toString(), { headers });
  }
}

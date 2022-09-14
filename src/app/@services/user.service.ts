import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  // get
  getTransaction(params): any {
    return this.http.get(environment.apiURL + '/transactions', {
      params: params,
    });
  }
  login(data): any {
    return this.http.post(environment.apiURL + '/user/login', data);
  }
}

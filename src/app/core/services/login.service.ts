import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) {
  }

  login(user) {
    return axios.post('http://localhost:3000/login', user)
      .then((result: any) => {
        this.authService.saveToken(result.data.token)
        return result.data;
      })
  }
}

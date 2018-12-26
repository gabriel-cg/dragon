import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuthenticated() {
   return !!window.localStorage['token']; 
  }

  getToken():String {
    return window.localStorage['token'];
  }

  saveToken(token: String) {
    window.localStorage['token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('token');
  }
}

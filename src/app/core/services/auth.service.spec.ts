import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new AuthService();
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('isAuthenticated() should return true when localStorage has token', () => {
    window.localStorage['token'] = 'test';
    
    expect(service.isAuthenticated()).toBe(true);
  });

  it('isAuthenticated() should return false when localStorage has not token', () => {
    window.localStorage.removeItem('token');
    
    expect(service.isAuthenticated()).toBe(false);
  });

  it('getToken() should return token', () => {
    const token = 'token test';
    window.localStorage['token'] = token;
    
    expect(service.getToken()).toEqual(token);
  });

  it('saveToken() should save token in localStorage', () => {
    const token = 'token with test';
    service.saveToken(token);
    
    expect(window.localStorage['token']).toEqual(token);
  });

  it('destroyToken() should remove token in localStorage', () => {
    window.localStorage['token'] = 'test test';
    
    service.destroyToken();

    expect(window.localStorage['token']).not.toBeDefined();
  });
});

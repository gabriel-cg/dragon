import { TestBed } from '@angular/core/testing';
import axios from 'axios';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpSpy;
  let authServiceSpy;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['saveToken']);
    TestBed.configureTestingModule({});

    service = new LoginService(httpSpy, authServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('login() should make request with user', async () => {
    const user = { test: 'test' };
    const token = { token: 'token test' };
    const response = { data: token };
    spyOn(axios, 'post').and.returnValue(Promise.resolve(response));

    await service.login(user);
    
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/login', user);
  });

  it('login() should return token', async () => {
    const user = { test: 'test' };
    const token = { token: 'token test' };
    const response = { data: token };
    spyOn(axios, 'post').and.returnValue(Promise.resolve(response));

    const result = await service.login(user);
    
    expect(result).toEqual(token);
  });

  it('login() should save token', async () => {
    const user = { test: 'test' };
    const token = { token: 'token test' };
    const response = { data: token };
    spyOn(axios, 'post').and.returnValue(Promise.resolve(response));

    await service.login(user);
    
    expect(authServiceSpy.saveToken).toHaveBeenCalledWith(token.token);
  });
});

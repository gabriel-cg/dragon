import { AuthGuard } from './auth-guard.service';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let routerSpy;
  let authServiceSpy;
  let routeSpy;
  let stateSpy;
  
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    routeSpy = jasmine.createSpyObj('ActivatedRouteSnapshot', ['']);
    stateSpy = jasmine.createSpyObj('RouterStateSnapshot', ['']);
  });

  it('should be created', () => {
    service = new AuthGuard(routerSpy, authServiceSpy);
    expect(service).toBeDefined();
  });

  it('canActive() should return true when is authenticated', () => {
    authServiceSpy.isAuthenticated.and.returnValue(true);
    service = new AuthGuard(routerSpy, authServiceSpy);

    const result = service.canActivate(routeSpy, stateSpy);

    expect(result).toBe(true);
    expect(authServiceSpy.isAuthenticated).toHaveBeenCalled();
  });

  it('canActive() should redirect page to login when is not authenticated', () => {
    authServiceSpy.isAuthenticated.and.returnValue(false);
    service = new AuthGuard(routerSpy, authServiceSpy);

    service.canActivate(routeSpy, stateSpy);

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('canActive() should return false when is not authenticated', () => {
    authServiceSpy.isAuthenticated.and.returnValue(false);
    service = new AuthGuard(routerSpy, authServiceSpy);

    const result = service.canActivate(routeSpy, stateSpy);

    expect(result).toBe(false);
  });
});
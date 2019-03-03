import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class FakeAuthService { 
 
  authenticated = false;
  isAuthenticated() {
    return this.authenticated;
  }
}


describe('AuthenticationService', () => {
 
  let loginservice : AuthenticationService;
  let service: FakeAuthService;
  beforeEach(() => TestBed.configureTestingModule({

    imports :[HttpClientTestingModule],
    providers:[AuthenticationService]

  }));

  loginservice = TestBed.get(AuthenticationService);

  it('should test login authentication',() =>{
    loginservice.login("alpha@g.com","beta").subscribe(data => {
    expect(data.email).toEqual("alpha@g.com");
   });
  });


  it('return true when user is -> not authenticated', () => {
    service.authenticated = false; 
    expect(loginservice.LoginStatus()).toBeTruthy();
  });

  it('returns false when the user is -> not authenticated', () => {
    service.authenticated = true; 
    expect(loginservice.LoginStatus()).toBeFalsy();
  });
});


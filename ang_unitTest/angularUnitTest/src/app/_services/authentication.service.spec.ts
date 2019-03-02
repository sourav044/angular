import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthenticationService', () => {
 
  let loginservice : AuthenticationService;

  beforeEach(() => TestBed.configureTestingModule({

    imports :[HttpClientTestingModule],
    providers:[AuthenticationService]

  }));

  loginservice = TestBed.get(AuthenticationService);



  it('should test login authentication',() =>{
    loginservice.login("a","b").subscribe(post => {
    expect("a").toEqual("a");
   });
  });
});

import { TestBed, async } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
 


describe('AuthenticationService', () => {
 
  let loginservice : AuthenticationService;
 
  beforeEach(() => { 
    
    TestBed.configureTestingModule({
    imports :[HttpClientTestingModule],
    providers:[AuthenticationService]
    
  });
  
  loginservice =  TestBed.get(AuthenticationService);
  
  });


  it('should test login  status',() =>{
    expect(loginservice.LoginStatus()).toEqual(false);
  });

 

  it('should test logOut  status',async(() =>{
      loginservice.LogOut().then((result) => {
        expect(result).toBe(true);
      });
    }));


    it('should test login authentication',() =>{
      loginservice.login("alpha@g.com","beta").subscribe(data => {
        expect(data.email).toEqual("alpha@g.com");
       });
    });

});


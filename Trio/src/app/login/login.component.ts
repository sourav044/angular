import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../_services';
 
@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading= false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService,
        private authenticationService: AuthenticationService) {}
 
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
        });

 
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
 
        this.loading = true;
       
         this.authenticationService.login(this.f.email.value, this.f.password.value)
             .subscribe(
                 data => {
                     this.loading = false;
                     this.router.navigate([this.returnUrl]);
                 },
                 error => {
                     this.toastrService.error('Trio', error);
                     this.loading = false;
                 });
    }
}

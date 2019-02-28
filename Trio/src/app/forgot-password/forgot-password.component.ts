
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordService } from '../_services' ;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private forgotPasswordService: ForgotPasswordService) { }
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    });
  }
  get f() { return this.forgotPassword.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.forgotPassword.invalid) {
      return;
    }
    this.loading = true;
  /// Not implemented
    return false;
  }
}

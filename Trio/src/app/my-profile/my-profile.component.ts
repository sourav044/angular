import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services' ;
declare var AWS :any;
declare var $:any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userProfile: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
      userService.getUsers.subscribe(data => this.listUserData())
     }
  ngOnInit() {
    this.userProfile = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      user_type:  ['', Validators.required],
      profile_picture: ['']
    });
    $("body").addClass("bg-gray");
    this.listUserData();
  }
  enableBool:boolean;
  enableEdit(){
    this.enableBool = true;
  }
  disableEdit(){
    this.enableBool = false;
  }
  userData:any=[];
  length:any;
  listUserData(){
    this.loading = true;
    this.userService.getUser()
    .subscribe(
      data =>{
        this.userProfile.controls['name'].setValue(data.name);
        this.userProfile.controls['email'].setValue(data.email);
        this.userProfile.controls['user_type'].setValue(data.user_type);
        this.userProfile.controls['profile_picture'].setValue(data.profile_picture);
        this.imageSrc = data.profile_picture;
        // localStorage.setItem('userPicture', data.profile_picture);
        localStorage.setItem('userName', data.name);
        this.userData=data;
        this.loading = false;
      },error =>{
        this.toastrService.error('Trio', error);
        this.loading = false;
      }
    )
  }

  imageSrc:string;
  readURL(event) {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
       // reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
        var fileName = Math.floor(new Date().valueOf() * Math.random());
        let link = 'https://vibrans-dev.s3.amazonaws.com/trio/profile/'+fileName+file.name;
        this.userProfile.controls['profile_picture'].setValue(link);
        this.uploadfile(fileName+file.name,file);
    }
  }
  uploadfile(name,image) {
    AWS.config.accessKeyId = '';
    AWS.config.secretAccessKey = '';
    var bucket = new AWS.S3({params: {Bucket: 'vibrans-dev'}});
    var params = {Key: 'trio/profile/'+name, Body: image,ACL: 'public-read'};
    bucket.upload(params, function (err, data) {});
  }



  get g() { return this.userProfile.controls; }
  onSubmit() {
    this.enableBool = false;
    this.submitted = true;
    if (this.userProfile.invalid) {
      return;
    }
    this.loading = true;
      this.userService.user_profile({name:this.g.name.value,email:this.g.email.value,profile_picture:this.g.profile_picture.value})
      .subscribe(
        data => {
          this.loading = false;
          this.toastrService.success('Trio', data.msg);
        },
        error => {
          this.toastrService.error('Trio', error);
          this.loading = false;
        });
  }
}

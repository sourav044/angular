import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { UserService, NotificationService } from '../../_services' ;
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor( 
    private toastrService: ToastrService,
    private userService: UserService,
    private notificationService: NotificationService
  ) { 
    userService.getUsers.subscribe(data => this.listUserData())
    notificationService.getNotifications.subscribe(data => this.listNotifications())
  } 
  ngAfterContentChecked(){

    $(".notification-btn").on('click',function(){
       $(".notification-container").addClass("active");
    });    
    $(".notification-close-btn, .notification-list li a").on('click',function(){
      $(".notification-container").removeClass("active");
   });   

  }
  ngOnInit() { 
    this.listUserData();
    this.listNotifications();
  }
  userData:any=[];
  listUserData(){   
    this.userService.getUser()
    .subscribe(
      data =>{            
        this.userData=data;       
      }      
    )    
  }
  notificationIcon:any=[];
  notificationsList:any=[];
  listNotifications(){  
    // this.loading = true;
    this.notificationService.getNotification()
    .subscribe(
      data =>{
        // this.loading = false;
        this.notificationIcon = [];
        if(data != null){
          this.notificationsList = data;  
          this.notificationsList.forEach(item =>{
            if(item.read_status == 0){
              this.notificationIcon.push(item);
            }
          })       
        }
      },error =>{
        this.toastrService.error('Trio', error);
        // this.loading = false;
      }
    )
  }
  changeStatus(id){
    this.notificationService.ChangeNotificationStatus({notification_id:id})
    .subscribe(
      data =>{
        // this.loading = false;
        if(data != null){
          this.notificationsList = data;         
        }
      },error =>{
        this.toastrService.error('Trio', error);
        // this.loading = false;
      }
    )

  }
  
}



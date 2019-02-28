import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatDialogRef } from '@angular/material';
import { Validators } from '@angular/forms';

import { SettingsService } from '../_services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor ( private router: Router,
  public dialog: MatDialog,
  private toastrService: ToastrService,
  private settingsService: SettingsService) {
    settingsService.getFormFields.subscribe(data => this.settingList())
 }

    loading: boolean;
    length: number = 0;

    editData: any = [];
    editFieldDialog(id): void {
      this.settingsData.forEach(item => {
        if (item.field_id == id) {
          this.editData = item;
        }
      })

    }
    activeInactiveStatus(status,id){
      if(status == 0){
        var value = {
         field_id:id,
         field_status:1
        }
      }else{
       var value = {
         field_id:id,
         field_status:0
        }
      }
      this.loading = true;
      this.settingsService.changeStatus(value)
      .subscribe(
        data =>{
         this.toastrService.info('Trio', data.msg);
         this.loading = false;
        },error =>{
           this.toastrService.error('Trio', error);
           this.loading = false;
        }
      )
     }
  closeDialog() {
    this.dialog.closeAll();
  }
  userData: any = [];
  ngOnInit() {
    $("body").addClass("bg-gray");
    this.settingList();
    this.userData = JSON.parse(localStorage.currentUser);
    var user_type = this.userData.user.user_type;
    if (user_type != "admin") {
      this.router.navigateByUrl('');
    }
  }
  settingsData: any = [];
  settingList(){
    this.loading = true;
    this.settingsService.settingsList()
      .subscribe(
        data => {
          this.loading = false;
          this.settingsData = data;
          // console.log(this.settingsData);
          this.length = this.settingsData.length;
        }, error => {
          this.toastrService.error('Trio', error);
          this.loading = false;
        });
}
}

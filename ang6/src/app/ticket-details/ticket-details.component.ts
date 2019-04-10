import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TicketService,UserService } from '../_services';
declare var $:any;
declare var AWS:any;
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  addComments: FormGroup;
  editTicketDetails: FormGroup;
  loading = false;
  submitted = false;
  submit = false;
  returnUrl: string;
  error = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService,
    private ticketService:TicketService) { }
    ticketId:any;
    userLogin:any = [];
  
  ngOnInit() {
    $(function(){
      $("body").addClass("bg-gray");
    });
    this.userLogin = JSON.parse(localStorage.currentUser);
    this.ticketId = this.route.snapshot.params['ticketId'];
    this.addComments = this.formBuilder.group({
      comment: ['', Validators.required],
      ticket_id: [this.ticketId]
    });
    this.editTicketDetails = this.formBuilder.group({
      title: ['', Validators.required],
      ticket_id: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      created_at:['', Validators.required],
      assigned_to: ['', Validators.required],
      file_name:[''],
    });

  }
  listUser:any = [];

}

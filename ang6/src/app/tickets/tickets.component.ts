import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TicketService }  from '../_services';
import { ToastrService } from 'ngx-toastr';
declare var $: any;


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
  

  constructor(
    public dialog: MatDialog,
    private ticketService:TicketService,
    private toastrService:ToastrService
  ) {
    ticketService.getTickets.subscribe(data => this.listTickets())
   }
   p: number = 1;
  ngOnInit() {
    this.listTickets();
    $(function () {
      $("body").addClass("bg-gray");
    });
  }
  ticketList:any =[];
  loading:boolean;
  listTickets(){
    this.loading = true;
    this.ticketService.getAll()
    .subscribe(
      data=>{
        console.log(data);
        this.loading = false;
        this.ticketList = data;
        for(let obj of  this.ticketList)
      {
         console.log(obj.title);
         
      }
      },error =>{
        this.loading = false;
        this.toastrService.error('Trio', error);
      });

      

      
    
      }
  }
 


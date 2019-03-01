import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TicketService }  from '../_services';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
export interface Brand {
  value: string;
  viewValue: string;
}
export interface Status {
  value: string;
  viewValue: string;
}
export interface AssignTo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
  brands: Brand[] = [
    { value: 'option1', viewValue: 'Brand 1' },
    { value: 'option2', viewValue: 'Brand 2' },
    { value: 'option3', viewValue: 'Brand 3' },
    { value: 'option4', viewValue: 'Brand 4' },
    { value: 'option5', viewValue: 'Brand 5' }
  ];
  status: Status[] = [
    { value: 'option1', viewValue: 'Status 1' },
    { value: 'option2', viewValue: 'Status 2' },
    { value: 'option3', viewValue: 'Status 3' },
    { value: 'option4', viewValue: 'Status 4' },
    { value: 'option5', viewValue: 'Status 5' }
  ];
  assignto: AssignTo[] = [
    { value: 'option1', viewValue: 'AssignTo 1' },
    { value: 'option2', viewValue: 'AssignTo 2' },
    { value: 'option3', viewValue: 'AssignTo 3' },
    { value: 'option4', viewValue: 'AssignTo 4' },
    { value: 'option5', viewValue: 'AssignTo 5' }
  ];

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
    this.ticketService.getAll({status:1})
    .subscribe(
      data=>{
        this.loading = false;
        this.ticketList = data;
      },error =>{
        this.loading = false;
        this.toastrService.error('Trio', error);
      });

      if(this.ticketList.length == 0)
      {

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "Matty",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });


        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });


        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });


        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });


        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });


        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });

        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"action",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie1",
          created_at: "31-Dec-2018"
        });
        this.ticketList.push({
          assigned_to: "",
          assigned_to_name: "",
          created_by:"WB",
          description:"Horror",
          raised_by : "KATHY",
          status : 1,
          ticket_id : 31,
          title : "Movie2",
          created_at: "1-Dec-2018"
        });
      }
  }
}

import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  userData:any =[];
  ngOnInit() {
    $("body").removeClass("bg-gray");
    this.userData = JSON.parse(localStorage.currentUser);
    this.list = [
     {
        link: '/home/tickets',
        img: '/assets/images/Tickets.png',
        name:'Tickets',
        role:'',
        description:'Movie Ticket'
      },
      {
        link: '/home/oxford',
        img: '/assets/images/oxford.jpg',
        name:'Oxford',
        role:'',
        description:'Dictionary Online'
      },
    ]
  }
  list:any=[];

}

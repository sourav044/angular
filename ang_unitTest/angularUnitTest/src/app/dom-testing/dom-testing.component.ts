import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dom-testing',
  templateUrl: './dom-testing.component.html',
  styleUrls: ['./dom-testing.component.css']
})

export class DomTestingComponent implements OnInit {
  
  message: string;
  count : number;
  constructor() { 

  }

  ngOnInit() { 
    this.count = 0; 
    this.message = "";
  }
  
 
  msg_send()
  {
    this.message = this.message + " " + this.count;
    this.count++;
  }

}

import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class SimpleMathService {
 
  value = 0;
   

  constructor() { }

  increment() {
    if (this.value < 15) {
      this.value += 1;
       
    } else {
      return 'Maximum reached!';
    }

    return this.value;
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
        
    } else {
       return 'Minimum reached!';
    }
    return this.value;
  }
  
  DExpection(firstvalue : number, secondvalue : number)
  {
 
   if(firstvalue != 0)
   {
     return firstvalue/secondvalue;
   }
   throw("Error");

  }


}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'url' })

export class Url implements PipeTransform {
  transform(item) {
   let x =  item.split(".");
  //  console.log(x)
   return x[4];
  }

}
import { Pipe , PipeTransform  } from "@angular/core";

@Pipe({
  name: 'sortPipe'
 })

export class SortPipe implements PipeTransform {

    transform(array: Array<string>, key: string): Array<string> { 
        array.sort((a: any, b: any) => {
            if(a.position != null || a.position != ''){
                if (a.position < b.position) {
                    return -1;
                  } else if (a.position > b.position) {
                    return 1;
                  } else {
                    return 0;
                  }
            }   
          });
          return array;

  }

}
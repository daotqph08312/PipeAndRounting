import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertGenderPipe'
})
export class ConvertGenderPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 0? "Nam":"Nữ";
  }

}
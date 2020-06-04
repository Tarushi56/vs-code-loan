import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(program: any[], searchValue: any, fieldName): any {
    if(!program){
      return [];
    }
    if(!searchValue){
      return program;
    }
    searchValue=searchValue.toLowerCase();

    return program.filter(program=>{
      if(isNaN(searchValue)){
      return program[fieldName].toLowerCase().includes(searchValue);
      }else{
        return program[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }

}

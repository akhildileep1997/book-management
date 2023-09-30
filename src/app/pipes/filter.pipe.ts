import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allBooks:any[],searchTerm:string,propsName:string):any[]  {
    const result:any[]=[]
    if(!allBooks||searchTerm==""||propsName==""){
      return allBooks
    }
    allBooks.forEach((book:any)=>{
      if(book[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      {
       result.push(book)
      }
    })
    return result;
  }

}

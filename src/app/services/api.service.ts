import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myBooks } from 'src/model/myBook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<myBooks>{
     return this.http.get(' http://localhost:3000/books')
  }

  viewBookDetails(bookId:string){
    return this.http.get(`http://localhost:3000/books/${bookId}`)
  }
  getCategoryName(categoryId:string){
   return this.http.get(`http://localhost:3000/category/${categoryId}`)
  }

  addBooks(BookBody:any){
      return this.http.post(` http://localhost:3000/books`,BookBody)
  }

  getAllCategory(){
    return this.http.get(`http://localhost:3000/category`)
  }
  deleteBooks(bookId:any){
    return this.http.delete(`http://localhost:3000/books/${bookId}`)
  }
  updateBook(bookId:any,BookBody:any){
    return this.http.put(`http://localhost:3000/books/${bookId}`,BookBody)
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-library-manager',
  templateUrl: './library-manager.component.html',
  styleUrls: ['./library-manager.component.css']
})
export class LibraryManagerComponent implements OnInit {
  books:any=[];
  searchKey:string=''

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
  this.getAllBook()
  }
  getAllBook(){
    this.api.getAllBooks().subscribe((data:any)=>{
      console.log(data);
      this.books=data
      
    })

  }
  search(event:any){
    console.log(event);
    console.log(event.target.value);
    this.searchKey=event.target.value
     }

     deleteBooks(bookId:any){
      this.api.deleteBooks(bookId).subscribe((data:any)=>{
        alert("book has been removed from the list")
        this.getAllBook()
      })
     }

}

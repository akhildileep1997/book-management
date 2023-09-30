import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myBooks } from 'src/model/myBook';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {
  book:any=[]
  categoryId:string=''
  categoryName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  bookId:string=''
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.bookId=data.id
      this.api.viewBookDetails(this.bookId).subscribe((result:any)=>{
        console.log(result);
        this.book=result
        this.categoryId=result.categoryId
        console.log(this.categoryId);
        this.api.getCategoryName(this.categoryId).subscribe((data:any)=>{
          console.log(data);
          this.categoryName=data.name
        })
        
        
      })
      
      })
  }
  

}

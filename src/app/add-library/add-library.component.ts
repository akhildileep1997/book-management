import { Component, OnInit } from '@angular/core';
import { myBooks } from 'src/model/myBook';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {
  categoryName:any=[]

  constructor(private api:ApiService,private router:Router){
  this.book.categoryId="select a category"
  }
  ngOnInit(): void {
    this.api.getAllCategory().subscribe((data:any)=>{
      console.log(data);
      this.categoryName=data
    })
  }

  addBooks(){
    this.api.addBooks(this.book).subscribe((result:any)=>{
      this.router.navigateByUrl('libraryHome/libraryManager')
    })
  }
  
  book:myBooks={};

}

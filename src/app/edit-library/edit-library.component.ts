import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myBooks } from 'src/model/myBook';
import { MyCategory } from 'src/model/myCategory';

@Component({
  selector: 'app-edit-library',
  templateUrl: './edit-library.component.html',
  styleUrls: ['./edit-library.component.css']
})
export class EditLibraryComponent implements OnInit {
  contactId:string=''
  book:myBooks={}
  AllCategory:MyCategory[]=[]
    constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){
    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.editId
      console.log(this.contactId);
      this.api.viewBookDetails(this.contactId).subscribe((result:any)=>{
        console.log(result);
        this.book=result
      this.api.getAllCategory().subscribe((data:any)=>{
        console.log(data);
        this.AllCategory=data
       
      })  
      })
      

    })
  }
  updateBook(){
    this.api.updateBook(this.contactId,this.book).subscribe((data:any)=>{
      console.log(data);
      this.router.navigateByUrl('libraryHome/libraryManager')
    })
  }
}

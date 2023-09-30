import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { LibraryManagerComponent } from './library-manager/library-manager.component';
import { ViewLibraryComponent } from './view-library/view-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { EditLibraryComponent } from './edit-library/edit-library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'libraryHome',pathMatch:'full'
  },
  {
    path:'libraryHome',component:LibraryHomeComponent
  },
  {
    path:'libraryHome/libraryManager',component:LibraryManagerComponent
  },
  {
    path:'libraryHome/libraryManager/viewLibrary/:id',component:ViewLibraryComponent
  },
  {
    path:'libraryHome/libraryManager/addLibrary',component:AddLibraryComponent
  },
  {
    path:'libraryHome/libraryManager/editLibrary/:editId',component:EditLibraryComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

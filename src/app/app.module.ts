import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LibraryHomeComponent } from './library-home/library-home.component';
import { LibraryManagerComponent } from './library-manager/library-manager.component';
import { ViewLibraryComponent } from './view-library/view-library.component';
import { EditLibraryComponent } from './edit-library/edit-library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibraryHomeComponent,
    LibraryManagerComponent,
    ViewLibraryComponent,
    EditLibraryComponent,
    PageNotFoundComponent,
    AddLibraryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


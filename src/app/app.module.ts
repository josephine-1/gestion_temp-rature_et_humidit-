import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { PageUserComponent } from './page-user/page-user.component';
import { ListeAdministrateurComponent } from './liste-administrateur/liste-administrateur.component';




@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    ListeUserComponent,
    PageUserComponent,
    ListeAdministrateurComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

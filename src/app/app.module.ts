import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  import { ReactiveFormsModule } from '@angular/forms'
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { PageUserComponent } from './page-user/page-user.component';
import { ListeAdministrateurComponent } from './liste-administrateur/liste-administrateur.component';




@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ProfilComponent,
    ModifierProfilComponent,
    ModifierPasswordComponent,
    PageAdminComponent,
    ListeUserComponent,
    PageUserComponent,
    ListeAdministrateurComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

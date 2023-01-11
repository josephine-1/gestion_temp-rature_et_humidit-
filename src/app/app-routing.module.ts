import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ListArchivesComponent } from './list-archives/list-archives.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ListeAdministrateurComponent } from './liste-administrateur/liste-administrateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageUserComponent } from './page-user/page-user.component';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { DashbordComponent} from './dashbord/dashbord.component';
import { DashbordOnComponent} from './dashbord-on/dashbord-on.component';
import { ProfilComponent } from './profil/profil.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'listeArchive', component: ListArchivesComponent},
  { path: 'modifier/:id', component: ModifierComponent},
  { path: 'listeAdmin', component: ListeAdministrateurComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'pageUser', component: PageUserComponent},
  { path: 'modifierPassword', component: ModifierPasswordComponent},
  { path: 'modifierProfil', component: ModifierProfilComponent},
  { path: 'pageAdmin' , component: PageAdminComponent},
  { path: 'profil' , component:ProfilComponent},
  { path: 'listeUser', component: ListeUserComponent},
  { path:  "off", component: DashbordComponent},
  { path: 'on', component: DashbordOnComponent},
  // { path: 'user-profile/:id', component: PageAdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

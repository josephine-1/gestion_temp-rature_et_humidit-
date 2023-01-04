import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ListArchivesComponent } from './list-archives/list-archives.component';
import { ModifierComponent } from './modifier/modifier.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'connexion'},
  { path: 'connexion', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'listeArchive', component: ListArchivesComponent},
  { path: 'modifier', component: ModifierComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
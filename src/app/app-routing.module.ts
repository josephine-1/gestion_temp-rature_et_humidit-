import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent} from './dashbord/dashbord.component';
import { DashbordOnComponent} from './dashbord-on/dashbord-on.component';

const routes: Routes = [
  {path:"off", component: DashbordComponent},
  {path: 'on', component: DashbordOnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

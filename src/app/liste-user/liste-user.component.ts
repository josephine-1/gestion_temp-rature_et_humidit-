import { Component } from '@angular/core';
 import UsersJson from '/home/josephine/Documents/gestion_temp-rature_et_humidit-/gestion_th/src/app/users.json'; 


 interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent {
  Users: USERS[] = UsersJson;
  constructor(){
    console.log(this.Users);
  }
}

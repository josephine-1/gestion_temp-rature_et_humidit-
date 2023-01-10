import { Component,OnInit } from '@angular/core';
import UsersJson from '../users.json';
import { AuthService } from '../shared/auth.service';


interface USERS {
  
  Nom: String;
  Prenom: String;
  Matricule: String;
  Email: String;
  Date_inscription: String;
}

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit{
  /* Users: USERS[] = UsersJson;
  constructor() {
    console.log(this.Users);
  } */
  p:number=1;
  searchText!:string;
  Users: USERS[] = UsersJson;

  prenom!:any;
  nom!:any;
  matricule!:any
  etat:any = localStorage.getItem('token');
  User: any = [];
  data:any;
  constructor(public AuthService: AuthService){
    console.log(this.Users);
  }
  ngOnInit(): void {
    this.AuthService.getAllUser().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.User = this.data.filter((e: any) => e.etat == true );

    });
  }
  
 
  deconnexion()
  {
    // Effacer tous les éléments
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('matricule');
  }
}

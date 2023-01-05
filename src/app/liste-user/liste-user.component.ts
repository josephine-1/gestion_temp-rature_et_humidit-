import { Component,OnInit } from '@angular/core';
import UsersJson from '../users.json';


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

  constructor(){
    console.log(this.Users);
  }
  ngOnInit(): void {
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
    this.matricule = localStorage.getItem('matricule');
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

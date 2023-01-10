/* import { Component } from '@angular/core';

@Component({
  selector: 'app-list-archives',
  templateUrl: './list-archives.component.html',
  styleUrls: ['./list-archives.component.scss']
})
export class ListArchivesComponent {

}
 */
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
  selector: 'app-list-archives',
  templateUrl: './list-archives.component.html',
  styleUrls: ['./list-archives.component.scss']
})
export class ListArchivesComponent implements OnInit{

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
   
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('matricule');
  }
}
 
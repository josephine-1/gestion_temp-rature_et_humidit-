/* import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-liste-administrateur',
  templateUrl: './liste-administrateur.component.html',
  styleUrls: ['./liste-administrateur.component.scss']
})
export class ListeAdministrateurComponent implements OnInit {
  constructor(private ngZone:NgZone,private router: Router,private activatedRoute: ActivatedRoute
    ){}

  deconnect(){
    Swal.fire({
      title: 'Déconnexion',
      text: 'Êtes-vous sûre de vouloir vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON',
    }).then((result) => {
        if (result.value) {
          this.ngZone.run(() => this.router.navigateByUrl('/'));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          (result.dismiss === Swal.DismissReason.cancel)
        }
    })
  }

  ngOnInit(): void {

  }
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
  selector: 'app-liste-administrateur',
  templateUrl: './liste-administrateur.component.html',
  styleUrls: ['./liste-administrateur.component.scss']
})
export class ListeAdministrateurComponent implements OnInit{

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
 
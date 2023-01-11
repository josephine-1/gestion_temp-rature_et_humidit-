


import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import UsersJson from '../users.json';
import { AuthService } from '../shared/auth.service';
//import { CrudService } from '../services/inscription.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

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

   /* liste fiective à remplacer Books par []  pour les données rééels*/

  pages: number = 1;
  searchText:any; // search installer npm i ng2-search-filter

  User: any = [];
  data:any;
  ngZone: any;
  router: any;

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
          // this.ngZone.run(() => this.router.navigateByUrl(''));
          this.logout();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          (result.dismiss === Swal.DismissReason.cancel)
        }
    })
  }


  constructor(public AuthService: AuthService) {}

  ngOnInit(): void {
    this.AuthService.getAllUser().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.User = this.data.filter((e: any) => e.etat == true );
    });
  }
  logout(){
    this.AuthService.doLogout();
  }

}


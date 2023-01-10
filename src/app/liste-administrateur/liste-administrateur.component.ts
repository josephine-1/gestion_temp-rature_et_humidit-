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
import { AuthService } from '../shared/auth.service';
import { CrudService } from '../services/inscription.service';
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

  constructor(public AuthService: AuthService) {}

  ngOnInit(): void {
    this.AuthService.getAllUser().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.User = this.data.filter((e: any) => e.etat == true );

      /*
      ngOnInit(): void {

  this.userService.getUsers().subscribe(
      data =>{

        this.users = data;

        this.crudService = this.Books.filter((e:any)=> e.etat == true)
        console.log(this.userActif)
      }
);

}
      */
    });
  }

/*   delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.AuthService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  } */
//  changeRole = (id: any, role: any) => {
  //  role = role == 'administrateur' ? 'user_simple' : 'administrateur'; /* pour switche */
 /*    const user = { profil: role };
    if (confirm('Changer de role')) {
      this.AuthService.change_role(id, user).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }; */

 // changeRole2 = (id: any, etat: any) => {
   // etat = etat == true ? false : true; /* pour archiver */
    /* const user = { etat: etat };
    if (confirm('Archiver !!!')) {
      this.crudService.change_role(id, user).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }; */
}

 
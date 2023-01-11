


 import { Component,OnInit } from '@angular/core';
import UsersJson from '../users.json';
import { AuthService } from '../shared/auth.service';
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
  /* switcher */
  changeRole = (id: any, role: any) => {
    role == 'administrateur' ? role ='utilisateur_simple' : role= 'administrateur'; /* pour switche */
     const users = { role: role };
    if (confirm('Changer de role')) {
      this.AuthService.update(id, users).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }; 
/* pour archiver */
  changeEtat = (id: any, etat: any) => {
    etat == true ? etat = false : etat= true; /* pour archiver */
     const users = { etat: etat };
    if (confirm('Voulez vous archiver ?')) {
      this.AuthService.update(id, users).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }; 

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

 
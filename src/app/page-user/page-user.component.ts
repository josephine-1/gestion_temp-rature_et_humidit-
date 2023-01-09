import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {
  constructor(private ngZone:NgZone,private router: Router,private activatedRoute: ActivatedRoute
    ){}

  choice(){
    Swal.fire({
      title: 'Modifier Profil',
      showCancelButton: true,
      confirmButtonText: 'modifier profil',
      cancelButtonText: 'modifier mot_de_passe',
    }).then((result) => {
   if (result.value) {
        this.ngZone.run(() => this.router.navigateByUrl('/modifierProfil'));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        (result.dismiss === Swal.DismissReason.cancel)
        this.ngZone.run(() => this.router.navigateByUrl('/modifierPassword'));
      }


    })
  }
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

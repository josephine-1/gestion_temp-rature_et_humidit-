
import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';import UsersJson from '../users.json';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  constructor(public AuthService: AuthService) {}

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
          // this.ngZone.run(() => this.router.navigateByUrl('/'));
          this.logout();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          (result.dismiss === Swal.DismissReason.cancel)
        }
    })
  }


   logout(){
    this.AuthService.doLogout();
  }

  ngOnInit(): void {

  }
}

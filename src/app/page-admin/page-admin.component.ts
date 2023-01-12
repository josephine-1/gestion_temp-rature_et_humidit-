import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {

  currentUser: any = {};
  getItem: any = {};
  
  constructor(private ngZone:NgZone,private router: Router,private activatedRoute: ActivatedRoute,
    private actRoute: ActivatedRoute,
    public authService: AuthService,
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
          this.ngZone.run(() => this.router.navigateByUrl('/connexion'));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          (result.dismiss === Swal.DismissReason.cancel)
        }
    })
  }

  ngOnInit(): void {

  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['connexion']);
    }
  }

  ngOnInit1() {
    
   
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(localStorage.getItem('id')).subscribe((res) => {
      console.log(res)
      this.currentUser = res.msg;
      
     
    }); 
  }

}

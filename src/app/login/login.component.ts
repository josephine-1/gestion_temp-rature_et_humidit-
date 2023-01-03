import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Utilisateur } from  '../utilisateur';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder ) { }
    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', Validators.required]
      });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/listeArchive');
  }

}
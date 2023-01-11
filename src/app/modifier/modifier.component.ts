import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { CrudService } from './../services/inscription.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  mailExiste:string='';
  succes:string='Modifier avec succes';
  submitted: Boolean= false
  getId: any;
  updateForm: FormGroup;
  registerForm!: FormGroup<any>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    public AuthService: AuthService
  ) {

    this.updateForm = this.formBuilder.group({
      prenom: [''],
      nom: [''],
      email: [''],

      
    });

     this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.AuthService.getUserById(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        prenom: res['prenom'],
        nom: res['nom'],
        email: res['email'],
      });
    }); 

    this.updateForm = this.formBuilder.group({
      prenom: [''],
      nom: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    });
  }

   onUpdate(): any {

    
    this.AuthService.update(this.getId, this.updateForm.value).subscribe(
      () => {
        alert(this.succes),
        this.ngZone.run(() => this.router.navigateByUrl('/cpt1'));
      },
      (err) => {
        this.mailExiste = "Email existe déja";
      }
    );
  } 

  
}
export function  noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}

import { Component, OnInit } from '@angular/core';
//ici j'importe des proprietés de angular liées a l'utilisation des formulaire
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss']
})
export class ModifierProfilComponent implements OnInit{
  registerForm!: FormGroup
  submitted: Boolean= false
  //ici on gére le controle de saisit du formulaire
  ngOnInit(){
    
    this.registerForm = this.formBuilder.group({
      prenom: ['', [Validators.required, noWhitespaceValidator]],
      nom: ['', [Validators.required, noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],


    })

    }
  constructor(private formBuilder: FormBuilder){

  }

     // la fonction getter est utiliser pour un accès facile aux champs de formulaire
     get f() { return this.registerForm.controls; }

     onSubmit() {
      
         this.submitted = true;

         // arrêtez-vous ici si le formulaire est invalide
         if (this.registerForm.invalid) {
             return;
         }

         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
     }

  }
  export function  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

import { Component, OnInit } from '@angular/core';
//ici j'importe des proprietés de angular liées a l'utilisation des formulaire
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.scss']
})
export class ModifierPasswordComponent implements OnInit{
  registerForm!: FormGroup
  submitted: Boolean= false
  //ici on gére le controle de saisit du formulaire
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      ancienpassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],


    }, {
      validator: MustMatch('password', 'confirmPassword')//ici je précise au validator que la class MushMatch
                                                        //va géré la comparaison des mots de passe
  });

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
  //ici j'exporte la class MushMatch pour la gestion de mes mots de passes
  export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            //renvoie si un autre validateur a déjà trouvé une erreur sur le matchingControl
            return;
        }

        //définir une erreur sur matchingControl si la validation échoue
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

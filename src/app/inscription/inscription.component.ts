import { Component, OnInit } from '@angular/core';
//ici j'importe des proprietés de angular liées a l'utilisation des formulaire
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
registerForm!: FormGroup
submitted: Boolean= false
password = 'password';
mailExiste:string|null = null;
users:any;

constructor(private formBuilder: FormBuilder,
  ){

}
//ici on gére le controle de saisit du formulaire
ngOnInit(){
  this.registerForm = this.formBuilder.group({
    prenom: ['', [Validators.required, noWhitespaceValidator]],
    nom: ['', [Validators.required, noWhitespaceValidator]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    role: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],


  }, {
    validator: MustMatch('password', 'confirmPassword')//ici je précise au validator que la class MushMatch
                                                      //va géré la comparaison des mots de passe
});

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
export function  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

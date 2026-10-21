import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact-service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  public contactForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl(''),
    hide: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.email]),
    commentaire: new FormControl('', Validators.required),
  });

  constructor(private contactService: ContactService, private router: Router) {
  }

  public onHide(cache: boolean) {
    const email = this.contactForm.controls.email;
    if (cache) {
      email.clearValidators();
      email.setValue('');
    } else {
      email.setValidators([Validators.required, Validators.email]);
    }
    email.updateValueAndValidity();
  }

  public envoyer() {
    this.contactService.dernierContact = this.contactForm.value;
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}

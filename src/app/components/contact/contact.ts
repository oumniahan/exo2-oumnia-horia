import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact';

const sansEspaces = (c: AbstractControl) =>
  (c.value ?? '').toString().trim() ? null : { required: true };
const emailValide = Validators.pattern(/^[^@\s]+@[^@\s]+$/);

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private contactService = inject(ContactService);

  form = this.fb.group({
    prenom: ['', sansEspaces],
    nom: ['', sansEspaces],
    age: [null as number | null, [Validators.min(0), Validators.max(120)]],
    hide: [false],
    email: ['', [sansEspaces, emailValide]],
    commentaire: ['', sansEspaces],
  });

  constructor() {
    this.form.controls.hide.valueChanges.subscribe((hidden) => {
      const email = this.form.controls.email;
      if (hidden) {
        email.clearValidators();
        email.reset('');
      } else {
        email.setValidators([sansEspaces, emailValide]);
      }
      email.updateValueAndValidity();
    });
  }

  get hidden(): boolean {
    return !!this.form.controls.hide.value;
  }

  envoyer(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.contactService.enregistrer({
      prenom: v.prenom!,
      nom: v.nom!,
      age: v.age,
      email: this.hidden ? null : v.email,
      commentaire: v.commentaire!,
    });
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}

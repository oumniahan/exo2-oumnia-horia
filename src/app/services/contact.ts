import { Injectable } from '@angular/core';

export interface ContactData {
  prenom: string;
  nom: string;
  age: number | null;
  email: string | null;
  commentaire: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private dernier: ContactData | null = null;

  /** Un nouvel envoi écrase le précédent. */
  enregistrer(data: ContactData): void {
    this.dernier = data;
  }

  get dernierContact(): ContactData | null {
    return this.dernier;
  }
}

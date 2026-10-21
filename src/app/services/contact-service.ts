import { Injectable } from '@angular/core';

export interface ContactData {
  prenom?: string | null;
  nom?: string | null;
  age?: string | null;
  email?: string | null;
  commentaire?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public dernierContact: ContactData | null = null;

}

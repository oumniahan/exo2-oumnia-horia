import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion {
  private contactService = inject(ContactService);
  get contact() {
    return this.contactService.dernierContact;
  }
}

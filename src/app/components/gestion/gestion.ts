import { Component } from '@angular/core';
import { ContactData, ContactService } from '../../services/contact-service';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion {

  public contact: ContactData | null = null;

  constructor(private contactService: ContactService) {
    this.contact = contactService.dernierContact;
  }
}

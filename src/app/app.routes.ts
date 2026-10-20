import { Routes } from '@angular/router';
import { Accueil } from './components/accueil/accueil';
import { Liste } from './components/liste/liste';
import { Contact } from './components/contact/contact';
import { Gestion } from './components/gestion/gestion';

export const routes: Routes = [
  { path: 'accueil', component: Accueil, title: 'Accueil' },
  { path: 'liste', component: Liste, title: 'Liste' },
  { path: 'gestion', component: Gestion, title: 'Gestion' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' },
];

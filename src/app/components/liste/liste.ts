import { Component } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  films: Film[] = [
    { titre: 'The Shawshank Redemption', affiche: 'films/shawshank.jpg' },
    { titre: 'The Godfather', affiche: 'films/godfather.jpg' },
    { titre: 'The Dark Knight', affiche: 'films/dark-knight.jpg' },
    { titre: 'Pulp Fiction', affiche: 'films/pulp-fiction.jpg' },
    { titre: 'Forrest Gump', affiche: 'films/forrest-gump.jpg' },
  ];
  selection: Film | null = null;

  choisir(film: Film): void {
    this.selection = film;
  }
}

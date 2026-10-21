import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})
export class Liste {

  public films = [
    { titre: 'The Shawshank Redemption', affiche: 'films/shawshank.jpg' },
    { titre: 'The Godfather', affiche: 'films/godfather.jpg' },
    { titre: 'The Dark Knight', affiche: 'films/dark-knight.jpg' },
    { titre: 'Pulp Fiction', affiche: 'films/pulp-fiction.jpg' },
    { titre: 'Forrest Gump', affiche: 'films/forrest-gump.jpg' },
  ];

  public filmChoisi: { titre: string, affiche: string } | null = null;

  public choisirFilm(film: { titre: string, affiche: string }) {
    this.filmChoisi = film;
  }
}

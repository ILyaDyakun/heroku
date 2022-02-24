import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../Game';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = "http://localhost:5000/games";

  constructor(private http:HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  addGameToLibrary(game: Game): Observable<Game> {
    const url = `${this.apiUrl}/${game.id}`;
    return this.http.put<Game>(url, game, httpOptions);
  }

  searchGames(s: string): Observable<Game[]> {
    if (s) {
      return this.http.get<Game[]>(`${this.apiUrl}?title_like=${s.trim()}`)
    } else {
      return this.http.get<Game[]>(this.apiUrl);
    }
  }
}

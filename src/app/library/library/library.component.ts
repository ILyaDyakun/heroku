import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  games: Game[] = [];
  name: string;
  isAdded: boolean;
  isSearching: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => this.games = games);
  }

  searchForGames(str: string) {
    this.isSearching = true;
    this.gameService.searchGames(str).subscribe();
  }

}

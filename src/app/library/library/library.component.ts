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
  game: Game;
  filteredGames: string;
  isAdded: boolean;
  title = '';
  indie = '';
  action = '';
  adventure = '';
  price: number = 950;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => this.games = games);
  }

  removeFromLibrary(game: Game) {
    this.isAdded = game.isAdded;
    game.isAdded = false;
    this.gameService.addGameToLibrary(game).subscribe();
  }

}

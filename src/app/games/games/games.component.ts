import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
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

  addToLibrary(game: Game) {
    this.isAdded = game.isAdded;
    game.isAdded = true;
    this.gameService.addGameToLibrary(game).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  filteredGames: string;
  isAdded: boolean;
  title = '';
  adventure = 'adventure';
  price: number = 0;
  priceControl = new FormControl('control');

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

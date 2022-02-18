import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-games-container',
  templateUrl: './games-container.component.html',
  styleUrls: ['./games-container.component.css']
})
export class GamesContainerComponent implements OnInit {
  games: Game[] = [];
  isAdded: boolean;

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

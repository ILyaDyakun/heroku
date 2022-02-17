import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  games: Game[] = [];
  isAdded: boolean = false;

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

import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-library-container',
  templateUrl: './library-container.component.html',
  styleUrls: ['./library-container.component.css']
})
export class LibraryContainerComponent implements OnInit {
  games: Game[] = [];
  isAdded: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => this.games = games);
  }

}

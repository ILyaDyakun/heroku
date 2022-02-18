import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Input() isAdded: boolean;
  @Output() onToggleIsAdded: EventEmitter<Game> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggle(game) {
    this.isAdded = game.isAdded;
    this.onToggleIsAdded.emit(game);
  }
}

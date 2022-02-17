import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.css']
})
export class LibraryCardComponent implements OnInit {
  @Input() game: Game;
  @Input() isAdded: boolean = false;


  constructor() {}

  ngOnInit(): void {}
}

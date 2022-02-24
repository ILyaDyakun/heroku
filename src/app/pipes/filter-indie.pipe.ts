import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/Game';

@Pipe({
  name: 'filterIndie',
})
export class FilterIndiePipe implements PipeTransform {

  transform(games: Game[], genreChecked: boolean): any[] {

    if(genreChecked){
      games = games.filter(game => game.genre ==='indie');
      return games;
    }
    return games;
  }
}
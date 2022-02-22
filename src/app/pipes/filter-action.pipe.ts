import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/Game';

@Pipe({
  name: 'filterAction'
})
export class FilterActionPipe implements PipeTransform {

  transform(games: Game[], genreChecked: boolean): any[] {

    if(genreChecked){
      games = games.filter(game => game.genre ==='action');
      return games;
    }
    return games;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/Game';

@Pipe({
  name: 'filterAdventure'
})
export class FilterAdventurePipe implements PipeTransform {

  transform(games: Game[], genreChecked: boolean): any[] {

    if(genreChecked){
      games = games.filter(game => game.genre ==='adventure');
      return games;
    }
    return games;
  }
}

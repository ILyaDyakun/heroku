import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class GamesModule { }

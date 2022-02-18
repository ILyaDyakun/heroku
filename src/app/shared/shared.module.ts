import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { GamesContainerComponent } from './games-container/games-container.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { CardComponent } from './card/card.component';
import { LibraryContainerComponent } from './library-container/library-container.component';
import { GamesComponent } from '../games/games/games.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    GamesContainerComponent,
    LibraryCardComponent,
    LibraryContainerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    GamesContainerComponent,
    CardComponent,
    LibraryCardComponent,
    LibraryContainerComponent,
  ],
})
export class SharedModule { }

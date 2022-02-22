import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { FilterPricePipe } from '../pipes/filter-price.pipe';
import { FilterIndiePipe } from '../pipes/filter-indie.pipe';
import { FilterActionPipe } from '../pipes/filter-action.pipe';
import { FilterAdventurePipe } from '../pipes/filter-adventure.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    FilterPipe,
    FilterIndiePipe,
    FilterActionPipe,
    FilterAdventurePipe,
    FilterPricePipe

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    FilterPipe,
    FilterIndiePipe,
    FilterActionPipe,
    FilterAdventurePipe,
    FilterPricePipe
  ],
})
export class SharedModule { }

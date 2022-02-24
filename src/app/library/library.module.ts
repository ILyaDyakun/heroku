import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LibraryModule { }

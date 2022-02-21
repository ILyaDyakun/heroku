import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FriendsComponent],
  imports: [CommonModule, BrowserModule],
})
export class FriendsModule {}

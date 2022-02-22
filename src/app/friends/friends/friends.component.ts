import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  isSearching: boolean = false;
  searchValue: string = '';
  searchList: any;
  timer: any;

  friends = [
    { userName: 'Bogdan_Koval' },
    { userName: 'Taras_Melnuk' },
    { userName: 'Danylo_Bondar' },
    { userName: 'Adriy_Ivanov' },
    { userName: 'Bohdan_Kulik' },
    { userName: 'Taras_Kozak' },
    { userName: 'BogdanFranko' },
    { userName: 'John_Kennedy' },
    { userName: 'YuriiGagarin' },
    { userName: 'George Washington' },
  ];

  constructor() {}

  deleteFriend(e: any) {
    const user =
      e.target.parentElement.querySelector('.friend__content').textContent;

    this.friends.splice(
      this.friends.findIndex((el) => el.userName === user),
      1
    );
  }
  onInput(e: any) {
    const value = e.target.value;
    const regEx = new RegExp(`^${value}`, 'i');

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.isSearching = true;
      this.searchValue = value;
      this.searchList = this.friends.filter((el) => regEx.test(el.userName));
    }, 300);

    if (value === '') {
      this.isSearching = false;
      return;
    }
  }

  ngOnInit(): void {}
}

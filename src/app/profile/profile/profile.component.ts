import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { DataServices } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User | undefined = undefined;
  public newUser: User | undefined = undefined;
  
  constructor(private dataService: DataServices) { }
  
  
  ngOnInit(): void {
    this.initUser();
  }

  public initUser(): void {
    const token = localStorage.getItem('token');
    this.user = this.dataService.getUser(token); 
    this.newUser = {...this.user};
  }

  public updateUser(): void {
    this.dataService.updateUser(this.newUser);
  }

  public onUserNameChange(value: string): void {
    this.newUser.firstName = value.split(' ')[0];
    this.newUser.lastName = value.split(' ')[1];
  }

  public onMailChange(value: string): void {
    this.newUser.email = value;
  }

  public onAgeChange(value: string): void {
    this.newUser.age = +value;
  }
}

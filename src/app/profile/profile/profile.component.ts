import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User | undefined = undefined;

  constructor(private authService: AuthService) { }
  
  
  ngOnInit(): void {
    this.initUser();
  }

  public initUser(): void {
    const token = localStorage.getItem('token');
    this.user = this.authService.getUser(token); 
    console.log(name);
  }
}

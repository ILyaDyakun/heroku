import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public isAuth = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();  
  }

  public logOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }
}

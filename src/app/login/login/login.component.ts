import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = '"';

  public onEmailChange(newValue: string) {
    this.email = newValue;
  }

  public onPasswordChange(newValue: string) {
    this.password = newValue;
  }

  public login() {
    const isLoginned = this.auth.login(this.email, this.password)
 
    if (isLoginned) {
      this.router.navigateByUrl('/profile')
    }
  }

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    console.log('login')
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest, AuthenticationResponse } from 'src/app/commons/models';
import { AuthenticationService } from 'src/app/commons/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

  }

  public register() {
    this.router.navigate(['register']);
  }

  public performLogin() {
    this.errorMsg = []
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (response: AuthenticationResponse) => {
        //Todo: save token
        this.router.navigate(['books']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}

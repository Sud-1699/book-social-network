import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/app.constants';
import { AuthenticationRequest, AuthenticationResponse } from 'src/app/commons/models';
import { AuthenticationService } from 'src/app/commons/services';
import { TokenService } from 'src/app/commons/services/core/token.service';

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
  constants = Constants;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
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
        this.tokenService.token = response.token as string;
        this.router.navigate(['books']);
      },
      error: (error) => {
        console.error(error);
        if(error.error.validationErrors) this.errorMsg = error.error.validationErrors;
        else this.errorMsg.push(error.error.error);
      }
    })
  }
}

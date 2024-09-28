import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/app.constants';
import { RegistrationRequest } from 'src/app/commons/models';
import { AuthenticationService } from 'src/app/commons/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };
  errorMsg: Array<string> = [];
  constants = Constants;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account'])
      },
      error: (error) => {
        this.errorMsg = error.error.validationErrors;
      }
    })
  }

  login() {
    this.router.navigate(['login']);
  }

}

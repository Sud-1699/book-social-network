import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/commons/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {

  message: string = '';
  isActivated: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  redirectTologin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: any) {
    this.confirmActivation(token);
  }

  private confirmActivation(token: string) {
    this.authService.activateAccount({
      token
    }).subscribe({
      next: () => {
        this.message = "Your account has been successfully acitvated\nNow you can proceed to login.";
        this.submitted = true;
        this.isActivated = true;
      },
      error: (error) => {
        this.message = "Token has been expired or invalid.";
        this.submitted = true;
        this.isActivated = false;
      }
    })
  }
  
}

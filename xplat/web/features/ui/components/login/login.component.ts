import { Component } from '@angular/core';

import { AuthService, LoginBaseComponent } from '@nuvious/features';

@Component({
  selector: 'nuvious-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent extends LoginBaseComponent {
  constructor(
    authService: AuthService
  ) {
    super(authService);
  }
}

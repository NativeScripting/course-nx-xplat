import { Directive } from '@angular/core';
import { BaseComponent } from '@nuvious/core';
import { AuthService } from '@nuvious/features/auth';

@Directive()
export abstract class LoginBaseComponent extends BaseComponent {
  public text: string = 'Login';

  constructor(
    protected authService: AuthService
  ) {
    super();
  }

  login() {
    this.authService.login();
  }
}

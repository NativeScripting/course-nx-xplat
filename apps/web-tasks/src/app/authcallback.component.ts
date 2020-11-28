import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, filter } from 'rxjs/operators';

import { BaseComponent, LogService } from '@nuvious/core';
import { AuthService } from '@nuvious/features';

@Component({
  selector: 'nuvious-authcallback',
  template: `
  <!-- could display an app-loading component -->
  `
})
export class AuthcallbackComponent extends BaseComponent {
  constructor(
    private authService: AuthService,
    private log: LogService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.authService.ready$.pipe(
      filter(ready => !!ready),
      take(1)
    ).subscribe(async () => {
      await this.authService.auth0Client.handleRedirectCallback('/');
      const userData = await this.authService.auth0Client.getUser();
      this.log.debug('auth0 userData:', userData);
      // Alex: once "Error: There are no query params available for parsing." is working, uncomment below to just take user back home:
      // this.router.navigate(['/']);
    });
  }
}

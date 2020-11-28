import { Inject, Injectable } from '@angular/core';
import type Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { RedirectLoginOptions } from '@auth0/auth0-spa-js/dist/typings/global';
import { environment, WindowService } from '@nuvious/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformAuth0ClientToken, PlatformAuth0ClientType } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth0Client: Auth0Client;
  ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private win: WindowService,
    @Inject(PlatformAuth0ClientToken) protected platformAuth0Client: PlatformAuth0ClientType,
  ) {
    this.initAuth0Client();
  }

  initAuth0Client() {
    this.platformAuth0Client({
      domain: environment.auth0.domain,
      client_id: environment.auth0.clientId,
      redirect_uri: `${this.win.location.origin}/${environment.auth0.redirectUri}`,
      scope: environment.auth0.scope,
      responseType: environment.auth0.responseType
    }).then(auth0Client => {
      this.auth0Client = auth0Client;
      this.ready$.next(true);
    });
  }

  login(options?: RedirectLoginOptions) {
    return this.auth0Client.loginWithRedirect(options);
  }
}
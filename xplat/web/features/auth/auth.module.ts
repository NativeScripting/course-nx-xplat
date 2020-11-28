import { NgModule } from '@angular/core';
import { AuthModule as SharedAuthModule, PlatformAuth0ClientToken } from '@nuvious/features';
import createAuth0Client from '@auth0/auth0-spa-js';

@NgModule({
  imports: [
    SharedAuthModule.forRoot([
      {
        provide: PlatformAuth0ClientToken,
        useValue: createAuth0Client
      },
    ])
  ],
})
export class AuthModule {}


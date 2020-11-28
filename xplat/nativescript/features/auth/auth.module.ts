import { NgModule } from '@angular/core';
import { AuthModule as SharedAuthModule, PlatformAuth0ClientToken } from '@nuvious/features/auth';
import { createAuth0Client } from './utils';

@NgModule({
  imports: [
    SharedAuthModule.forRoot([
      {
        provide: PlatformAuth0ClientToken,
        useFactory: createAuth0Client,
      },
    ]),
  ]
})
export class AuthModule {}
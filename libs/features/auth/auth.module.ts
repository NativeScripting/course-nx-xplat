import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@nuvious/utils';

@NgModule()
export class AuthModule {

  static forRoot(
    configuredProviders: Array<any>
  ): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        ...configuredProviders
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }

}

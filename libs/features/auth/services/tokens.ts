import { InjectionToken } from '@angular/core';
import type Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import type { Auth0ClientOptions } from '@auth0/auth0-spa-js/dist/typings/global';
export type PlatformAuth0ClientType = (options: Auth0ClientOptions) => Promise<Auth0Client>;
export const PlatformAuth0ClientToken = new InjectionToken<PlatformAuth0ClientType>('PlatformAuth0ClientToken');
import { Auth0 } from 'nativescript-auth0';
import type Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import type {
  Auth0ClientOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js/dist/typings/global';
import { environment } from '@nuvious/core';

let _auth0Client: Auth0;

export function createAuth0Client() {
  return (options?: Auth0ClientOptions) => {
    return new Promise((resolve) => {
      if (!_auth0Client) {
        // create mobile Auth0 instance
        _auth0Client = new Auth0(
          environment.auth0.clientId,
          environment.auth0.domain
        );
      }
      resolve(<Auth0Client>{
        // can implement any Auth0Client method you'd like here
        loginWithRedirect: (options?: RedirectLoginOptions) => {
          return new Promise((resolve, reject) => {
            _auth0Client
              .webAuthentication({
                ...(options || {}),
                // add other custom mobile options as needed
              })
              .then((result) => {
                console.log('loginWithRedirect result:', result);
                // recommendations to do here:
                // use a global EventBus service to emit an event with these details here that mobile apps can wire into

                resolve();
              })
              .catch((err) => {
                console.log('loginWithRedirect error:', err);
                reject();
              });
          });
        },
      });
    });
  };
}

export function getAuth0Client() {
  return _auth0Client;
}

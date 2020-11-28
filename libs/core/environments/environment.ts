import { IEnvironmentConfiguration } from './environment-configuration-interface';

export const environment: IEnvironmentConfiguration = {
  environmentName: '<default>',
  production: false,
  api_url: 'http://127.0.0.1:4000',
  baseRoutePath: '',
  auth0: {
    domain: 'nativescriptnx.us.auth0.com',
    clientId: 'oEagDfjAVyXXrv35NO9GYmbFHqnDDLCh',
    redirectUri: 'authcallback',
    scope: 'openid profile email',
    responseType: 'token id_token',
  },
};

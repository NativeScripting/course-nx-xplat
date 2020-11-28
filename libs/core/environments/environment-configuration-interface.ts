export interface IEnvironmentConfiguration {
    environmentName: string;
    production: boolean;
    api_url: string;
    baseRoutePath: string;
    auth0: {
      domain: string;
      clientId: string;
      redirectUri: string;
      scope: string;
      responseType: string;
    }
}

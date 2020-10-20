import { InjectionToken } from '@angular/core';
import { IEnvironmentConfiguration } from './environment-configuration-interface';

export const ENVIRONMENT_CONFIGURATION_TOKEN = new InjectionToken<IEnvironmentConfiguration>('ENVIRONMENT_CONFIGURATION_TOKEN');

import { Component, Inject } from '@angular/core';

import { BaseComponent } from '@nuvious/core';
import { IEnvironmentConfiguration } from '@nuvious/core/environments/environment-configuration-interface';
import { ENVIRONMENT_CONFIGURATION_TOKEN } from '@nuvious/core/environments/environment-configuration-token';

@Component({
  moduleId: module.id,
  selector: 'nuvious-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent {
  
  envName: string = 'env name here';

  constructor(
    @Inject(ENVIRONMENT_CONFIGURATION_TOKEN)
    protected env: IEnvironmentConfiguration
    ){
    super();
  }

  ngOnInit() {
    this.envName = this.env.environmentName;
  }
}

import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@nuvious/core';
import { AppService } from '@nuvious/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}

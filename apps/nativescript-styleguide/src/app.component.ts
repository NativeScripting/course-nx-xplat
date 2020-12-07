import { Component } from '@angular/core';

// libs
import { AppBaseComponent, AppService } from '@nuvious/nativescript';

@Component({
  selector: 'abc-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}

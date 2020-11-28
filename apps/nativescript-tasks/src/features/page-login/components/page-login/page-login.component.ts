import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/core';

@Component({
  moduleId: module.id,
  selector: 'nuvious-page-login',
  templateUrl: './page-login.component.html',
})
export class PageLoginComponent extends BaseComponent {
  constructor() {
    super();
  }
}

import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/core';

@Component({
  moduleId: module.id,
  selector: 'abc-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent extends BaseComponent {
  constructor() {
    super();
  }
}

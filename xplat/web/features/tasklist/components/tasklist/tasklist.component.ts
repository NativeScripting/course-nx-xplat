import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/core';

@Component({
  selector: 'nuvious-tasklist',
  templateUrl: 'tasklist.component.html',
})
export class TasklistComponent extends BaseComponent {
  constructor() {
    super();
  }
}
